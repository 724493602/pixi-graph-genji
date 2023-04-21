import { BaseShape, ContainerName, ILink } from '@/types';
import { GCfg } from '@/graph/graph';
import { getCirclePont } from '@/utils/point';
import {
  Graphics,
  Color,
  Container,
  TextStyle,
  Text,
  DisplayObject
} from 'pixi.js';
import { DashLineShader, SmoothGraphics } from '@pixi/graphics-smooth';
import { getAngle, getPosAverage } from '@/utils/helper';
export default class LineShape extends BaseShape {
  private point: { x: number; y: number };
  private linkContainer: Container<DisplayObject>;
  private linkData: ILink;
  constructor(cfg: GCfg) {
    super(cfg);
  }
  draw(link: ILink) {
    this.linkData = link;
    this.linkContainer = new Container();
    this.linkContainer.name = ContainerName.linkContainer;
    this.linkContainer.addChild(this.drawLine());
    this.linkContainer.addChild(this.drawArrow());
    this.linkContainer.addChild(this.drawLabel());
    return this.linkContainer;
  }

  private drawLine() {
    let line: SmoothGraphics | Graphics = this.linkData?.style?.lineDash
      ? new SmoothGraphics()
      : new Graphics();
    line.name = ContainerName.linkLine;
    this.calcLine(line);
    return line;
  }
  private calcLine(line: SmoothGraphics | Graphics) {
    let linkStyle = this.linkData.style;
    let lineStyle: any = {
      width: linkStyle?.lineWidth || this.cfg.defaultLink.style.lineWidth,
      color: new Color(
        linkStyle?.stroke || this.cfg.defaultLink.style.stroke
      ).toNumber()
    };
    if (this.linkData?.style?.lineDash) {
      lineStyle.shader = new DashLineShader({
        dash: this.linkData.style.lineDash,
        gap: 8
      });
    }
    (line as any).lineStyle(lineStyle);
    this.point = getCirclePont(
      this.linkData.source,
      this.linkData.target,
      this.linkData.target.size || this.cfg.defaultNode.size
    );
    line.moveTo(this.linkData.source.x, this.linkData.source.y);
    line.lineTo(this.point.x, this.point.y);
  }

  private drawArrow() {
    let arrow = new Graphics();
    arrow.name = ContainerName.linkArrow;
    arrow.beginFill(
      this.linkData?.style?.stroke || this.cfg.defaultLink.style.stroke
    );
    arrow.drawPolygon([0, 0, 10, -5, 6.666666666666667, 0, 10, 5, 0, 0]);
    arrow.rotation = Math.atan2(
      this.linkData.source.y - this.point.y,
      this.linkData.source.x - this.point.x
    );
    arrow.position.set(this.point.x, this.point.y);
    return arrow;
  }

  private drawLabel() {
    let linkStyle = this.linkData?.labelCfg;
    let textContainer = new Container();
    textContainer.name = ContainerName.linkText;
    let cfg = this.cfg.defaultLink;
    let textStyle = new TextStyle({
      fontSize: linkStyle?.style?.fontSize || cfg.labelCfg.style.fontSize,
      fill: linkStyle?.style?.fill || cfg.labelCfg.style.fill,
      align: (linkStyle?.align || cfg.labelCfg.align) as any
    });
    let text = new Text(
      this.linkData.showName || this.linkData.name || '',
      textStyle
    );
    text.anchor.set(0.5);
    let position = getPosAverage(this.linkData.source, this.linkData.target);
    text.position.y = this.cfg.defaultLink!.labelCfg!.offset!.y || -8;
    textContainer.angle = getAngle(this.linkData.source, this.linkData.target);
    textContainer.position.set(position.x, position.y);
    textContainer.addChild(text);
    return textContainer;
  }

  update(link: ILink): void {
    this.linkData = link;
    let line = this.linkContainer.getChildByName<SmoothGraphics>(
      ContainerName.linkLine
    );
    line!.clear();
    this.calcLine(line as SmoothGraphics);

    let arrow = this.linkContainer.getChildByName(ContainerName.linkArrow);
    arrow!.rotation = Math.atan2(
      link.source.y - this.point.y,
      link.source.x - this.point.x
    );
    arrow!.position.set(this.point.x, this.point.y);

    let text = this.linkContainer.getChildByName<Graphics>(
      ContainerName.linkText
    );

    let position = getPosAverage(link.source, link.target);
    text!.position.set(position.x, position.y);
    let angle = getAngle(link.source, link.target);
    text!.angle = angle;
    if (angle > 90 || angle < -90) {
      text!.angle = angle + 180;
    } else {
      text!.angle = angle;
    }
  }
}
