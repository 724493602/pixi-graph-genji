import { BaseShape, ContainerName, ILink } from '@/types';
import {
  Container,
  DisplayObject,
  Graphics,
  Color,
  TextStyle,
  Text
} from 'pixi.js';
import { GCfg } from '@/graph/graph';
import {
  getControlPoint,
  getCenterCoordinate,
  getPointOnDistanceOverRadius,
  getCirclePont
} from '@/utils/point';
import { getAngle } from '@/utils/helper';
export default class QuadraticShape extends BaseShape {
  private linkContainer: Container<DisplayObject>;
  private linkData: ILink;
  constructor(cfg: GCfg) {
    super(cfg);
  }

  draw(data: ILink) {
    this.linkData = data;
    this.linkContainer = new Container();
    this.linkContainer.name = ContainerName.linkContainer;
    let quadratic = this.drawLine();
    this.linkContainer.addChild(quadratic);
    this.linkContainer.addChild(this.drawLabel(quadratic));
    this.linkContainer.addChild(this.drawArrow(quadratic));
    return this.linkContainer;
  }

  drawLine() {
    let quadratic = new Graphics();
    quadratic.name = ContainerName.linkQuadratic;
    this.calcLine(quadratic);
    return quadratic;
  }

  calcLine(quadratic: Graphics) {
    let linkStyle = this.linkData.style;
    let startPoint = this.linkData.source;
    let endPoint = this.linkData.target;
    let ctrPont = getControlPoint(
      startPoint,
      endPoint,
      0.5,
      this.linkData._curveOffset
    );
    quadratic.lineStyle(
      linkStyle?.lineWidth || this.cfg.defaultLink.style.lineWidth,
      new Color(
        linkStyle?.stroke || this.cfg.defaultLink.style.stroke
      ).toNumber(),
      1
    );
    quadratic.moveTo(startPoint.x, startPoint.y);
    quadratic.quadraticCurveTo(ctrPont.x, ctrPont.y, endPoint.x, endPoint.y);
  }

  drawLabel(quadratic: Graphics) {
    let labelCfg = this.linkData.labelCfg;
    let textContainer = new Container();
    textContainer.name = ContainerName.linkText;
    let cfg = this.cfg.defaultLink.labelCfg;
    let testStyle = new TextStyle({
      fontSize: labelCfg?.style?.fontSize || cfg.style.fontSize,
      fill: labelCfg?.style?.fill || cfg.style.fill,
      align: (labelCfg?.align || cfg.align) as any
    });
    let text = new Text(
      this.linkData.showName || this.linkData.name || '',
      testStyle
    );
    text.anchor.set(0.5);
    text.position.y = this.cfg.defaultLink!.labelCfg!.offset!.y || -8;
    this.calcLabel(quadratic, textContainer);
    textContainer.addChild(text);
    return textContainer;
  }
  calcLabel(quadratic: Graphics, text: Container) {
    if (isNaN(this.linkData.source.x) || isNaN(this.linkData.source.y)) return;
    let points = getCenterCoordinate(quadratic!.currentPath.points);
    text!.position.set(points.x, points.y);
    let angle = getAngle(this.linkData.source, this.linkData.target);
    text!.angle = angle;
    if (angle > 90 || angle < -90) {
      text!.angle = angle + 180;
    } else {
      text!.angle = angle;
    }
  }

  drawArrow(quadratic: Graphics) {
    let arrow = new Graphics();
    arrow.name = ContainerName.linkArrow;
    arrow.beginFill(
      this.linkData?.style?.stroke || this.cfg.defaultLink.style.stroke
    );
    arrow.drawPolygon([0, 0, 10, -5, 6.666666666666667, 0, 10, 5, 0, 0]);
    this.calcArrow(arrow, quadratic);
    return arrow;
  }
  calcArrow(arrow: Graphics, quadratic: Graphics) {
    if (this.linkData.target.x && this.linkData.source.x) {
      // todo 准确求出圆和曲线焦点的坐标
      // 该坐标只是一个近似值，节点越大可能位置会越偏移
      // 获取曲线上大于半径的第一个坐标，但是currentPath每个点大约有10像素间隔，误差很大
      let point = getPointOnDistanceOverRadius(
        quadratic.currentPath.points,
        this.linkData.target.size || this.cfg.defaultNode.size
      );
      // 二次修正坐标
      let p = getCirclePont(
        point as any,
        this.linkData.target,
        this.linkData.target.size || this.cfg.defaultNode.size
      );
      arrow.position.set(p.x, p.y);
      arrow.rotation = Math.atan2(
        point!.y - this.linkData.target.y,
        point!.x - this.linkData.target.x
      );
    }
  }

  update(data: ILink): void {
    this.linkData = data;
    let quadratic = this.linkContainer.getChildByName<Graphics>(
      ContainerName.linkQuadratic
    );
    quadratic!.clear();
    this.calcLine(quadratic as Graphics);

    let text = this.linkContainer.getChildByName<Container>(
      ContainerName.linkText
    );
    this.calcLabel(quadratic as Graphics, text as Container);

    let arrow = this.linkContainer.getChildByName<Graphics>(
      ContainerName.linkArrow
    );
    this.calcArrow(arrow as Graphics, quadratic as Graphics);
  }
}
