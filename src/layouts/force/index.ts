import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
  forceX,
  forceY,
  forceCenter,
  forceRadial
} from 'd3-force';
import { merge } from 'lodash-es';
import {
  ILink,
  INode,
  IModel,
  BaseLayout,
  IForceCfg,
  DeepPartial,
  KV,
  ILayoutCfg
} from '@/types';
import { calculateWeight } from '@/utils/calculateWeight';

export default class Force extends BaseLayout {
  private layoutCfg: IForceCfg;
  public simulation: any;
  public onTick: () => void = () => {};
  public onLayoutEnd: () => void = () => {};

  constructor(options: DeepPartial<IForceCfg> | KV = {}) {
    super();
    this.layoutCfg = merge(this.getDefaultCfg(), options);
  }

  private getDefaultCfg(): IForceCfg {
    return {
      charge: {
        enabled: true,
        autoCalcStrength: true,
        strength: -20,
        theta: 0.9,
        strengthFn: null
      },
      collide: {
        enabled: true,
        strength: 1,
        radius: 30,
        iterations: 1,
        strengthFn: null
      },
      link: {
        enabled: true,
        autoCalcLength: true,
        strength: 0.8,
        length: 100,
        minLength: 100,
        strengthFn: null
      },
      alpha: 0.5,
      minVelocityDecay: 0.1,
      customVelocityDecay: null,
      xForce: {
        enabled: true,
        x: 0,
        xFn: null,
        strength: 0.1,
        strengthFn: null
      },
      yForce: {
        enabled: true,
        y: 0,
        yFn: null,
        strength: 0.1,
        strengthFn: null
      },
      radialForce: {
        x: 0,
        y: 0,
        diffRadius: 200,
        enabled: false,
        border: false,
        rFn: () => {
          return 300;
        },
        strengthFn: () => {
          return 3;
        }
      },
      center: {
        x: 0,
        y: 0,
        enabled: false,
        strength: 0.5
      },
      onTick: () => {},
      onLayoutEnd: () => {}
    };
  }
  // 处理数据
  init(data: IModel) {
    this.nodes = data.nodes;
    this.links = data.links;
    calculateWeight(data);
    this.calcLinkMinLength(this.nodes);
  }

  execute() {
    let config = this.layoutCfg;
    if (!this.simulation) {
      const simulation = forceSimulation<INode, ILink>(this.nodes);
      this.simulation = simulation;

      if (config.center.enabled) {
        simulation.force(
          'center',
          forceCenter(config.center.x, config.center.y).strength(
            config.center.strength
          )
        );
      }

      const xForce = config.xForce;
      if (xForce && xForce?.enabled) {
        simulation.force(
          'x',
          forceX(xForce.xFn || xForce?.x).strength(
            xForce.strengthFn || xForce?.strength
          )
        );
      }
      const yForce = config.yForce;
      if (yForce && yForce?.enabled) {
        simulation.force(
          'y',
          forceY(yForce.yFn || yForce?.y).strength(
            yForce.strengthFn || yForce?.strength
          )
        );
      }

      const radialForce = config.radialForce;
      if (radialForce && radialForce.enabled) {
        simulation.force(
          'r',
          forceRadial(
            radialForce.rFn as any,
            radialForce?.x || xForce?.x,
            radialForce?.y || yForce?.y
          ).strength(radialForce.strengthFn as any)
        );
      }

      const chargeForce = config.charge;
      if (chargeForce && chargeForce.enabled) {
        simulation.force(
          'charge',
          forceManyBody<INode>()
            .strength(
              chargeForce.strengthFn
                ? chargeForce.strengthFn
                : (d) => {
                    if (chargeForce.autoCalcStrength) {
                      let _weight = d?._weight || 0;
                      if (_weight > 1) {
                        let val = Math.min(_weight * -500, -800);
                        if (val < -30000) val = -30000;

                        return val;
                      } else {
                        return -200;
                      }
                    } else {
                      return chargeForce.strength;
                    }
                  }
            )
            .theta(chargeForce.theta)
        );
      }

      const collideForce = config.collide;
      if (collideForce && collideForce.enabled) {
        simulation.force(
          'collide',
          forceCollide()
            .radius(collideForce.radius)
            .strength((collideForce.strengthFn as any) || collideForce.strength)
            .iterations(collideForce.iterations)
        );
      }
      simulation?.nodes(this.nodes);

      const linkForce = config.link;
      if (linkForce && linkForce.enabled) {
        simulation.force(
          'link',
          forceLink<INode, ILink>(this.links)
            .id((d) => d.id)
            .distance((d) => {
              let _dis;
              let _leng = Math.max(config.link.length, config.link.minLength);
              if (config.link.autoCalcLength) {
                _dis = Math.max(
                  _leng - 10 * (d?._weight || 0),
                  config.link.minLength
                );
              } else {
                _dis = _leng;
              }
              /** 曲线加长 */
              if (d._linkType === 'quadratic') {
                _dis = _dis * (1.2 + d._sameCount * 0.1);
              }
              return _dis;
            })
            .strength(linkForce.strengthFn || linkForce.strength)
        );
      }
      let totalLength = this.nodes.length + this.links.length;
      // 自定义衰减率
      if (config.customVelocityDecay) {
        simulation.velocityDecay(config.customVelocityDecay);
      } else {
        let velocityDecay = config.minVelocityDecay + totalLength * 0.001;
        velocityDecay > 0.4 ? (velocityDecay = 0.4) : null;
        simulation.velocityDecay(velocityDecay);
      }
      simulation.on('tick', () => this.onTick());
      simulation.on('end', () => this.onLayoutEnd());
      simulation.alpha(this.layoutCfg.alpha);
      simulation.restart();
    } else {
      this.simulation.stop();
      this.simulation.nodes(this.nodes);
      this.simulation.force('link')?.links(this.links);
      this.simulation.alpha(this.layoutCfg.alpha).restart();
    }
  }

  updateCfg(cfg: DeepPartial<IForceCfg> = {}) {
    this.simulation.stop();
    this.simulation = null;
    this.layoutCfg = merge(this.getDefaultCfg(), cfg);
  }

  public getType() {
    return 'force';
  }

  public getCfg(): ILayoutCfg {
    return this.layoutCfg;
  }

  /**
   * @description: 计算兜底边长
   * @return {*}
   * @param nodes
   */
  calcLinkMinLength(nodes: INode[]) {
    if (nodes.length <= 15) {
      this.layoutCfg.link.minLength = 150;
    }
  }
}
