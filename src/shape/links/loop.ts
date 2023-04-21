import { BaseShape, ContainerName, ILink } from '@/types';
import { GCfg } from '@/graph/graph';
import {
  Container,
  DisplayObject,
  Graphics,
  Color,
  Text,
  TextStyle
} from 'pixi.js';

export default class LoopShape extends BaseShape {
  private linkContainer: Container<DisplayObject>;
  private linkData: ILink;
  constructor(cfg: GCfg) {
    super(cfg);
  }

  draw(data: ILink) {
    this.linkData = data;
    this.linkContainer = new Container();
    this.linkContainer.name = ContainerName.linkContainer;
    this.linkContainer.position.set(data.source.x, data.source.y);
    this.linkContainer.angle = data!.loopCfg!.num * 45;
    this.linkContainer.addChild(this.drawLine());
    this.linkContainer.addChild(this.drawLabel());
    this.linkContainer.addChild(this.drawArrow());
    return this.linkContainer;
  }

  drawLine() {
    let linkStyle = this.linkData.style;
    let loop = new Graphics();
    loop.name = ContainerName.linkLoop;
    loop.lineStyle(
      linkStyle?.lineWidth || this.cfg.defaultLink.style.lineWidth,
      new Color(
        linkStyle?.stroke || this.cfg.defaultLink.style.stroke
      ).toNumber(),
      1
    );
    loop.moveTo(0, 0);
    loop.bezierCurveTo(-35, -80, 35, -80, 0, 0);
    return loop;
  }

  drawLabel() {
    let labelCfg = this.linkData.labelCfg;
    let cfg = this.cfg.defaultLink.labelCfg;
    let testStyle = new TextStyle({
      fontSize: (labelCfg?.style?.fontSize || cfg.style.fontSize) - 1,
      fill: labelCfg?.style?.fill || cfg.style.fill,
      align: (labelCfg?.align || cfg.align) as any
    });
    let text = new Text(
      this.linkData.showName || this.linkData.name || '',
      testStyle
    );
    text.name = ContainerName.linkText;
    text.anchor.set(0.5);
    text.position.set(0, -70);
    return text;
  }

  drawArrow() {
    let arrow = new Graphics();
    arrow.name = ContainerName.linkArrow;
    arrow.beginFill(
      this.linkData.style?.stroke || this.cfg.defaultLink.style.stroke
    );
    arrow.drawPolygon([0, 0, 10, -5, 6.666666666666667, 0, 10, 5, 0, 0]);
    arrow.angle = -82;
    arrow.position.set(
      8,
      -(this.linkData.target.size || this.cfg.defaultNode.size)
    );
    return arrow;
  }

  update(data: ILink): void {
    this.linkContainer.position.set(data.source.x, data.source.y);
  }
}
