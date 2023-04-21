import { BaseShape, INode } from '@/types';
import { Container, Graphics, TextStyle, Text, DisplayObject } from 'pixi.js';
import { ContainerName } from '@/types/cfg';
import { GCfg } from '@/graph/graph';

export default class CircleShape extends BaseShape {
  private nodeContainer: Container<DisplayObject>;
  private nodeData: INode;
  constructor(cfg: GCfg) {
    super(cfg);
  }

  draw(node: INode) {
    this.nodeData = node;
    this.nodeContainer = new Container();
    this.nodeContainer.name = ContainerName.nodeContainer;
    this.nodeContainer.addChild(this.drawNode());
    this.nodeContainer.addChild(this.drawLabel());
    this.nodeContainer.position.set(node.x, node.y);
    return this.nodeContainer;
  }

  private drawNode() {
    let circle = new Graphics();
    circle.name = ContainerName.nodeCircle;
    if (this.nodeData.style?.lineWidth) {
      circle.lineStyle({
        width: this.nodeData.style?.lineWidth,
        color: this.nodeData.style?.stroke
      });
    }
    circle.beginFill(
      this.nodeData.style?.fill || this.cfg.defaultNode.style.fill
    );
    circle.drawCircle(0, 0, this.nodeData.size || this.cfg.defaultNode.size);
    circle.endFill();
    return circle;
  }

  private drawLabel() {
    let nodeCfg = this.nodeData.labelCfg;
    let textStyle = new TextStyle({
      fontSize:
        nodeCfg?.style?.fontSize ||
        this.cfg.defaultNode.labelCfg.style.fontSize,
      fill: nodeCfg?.style?.fill || this.cfg.defaultNode.labelCfg.style.fill,
      align: (nodeCfg?.align ||
        this.cfg.defaultNode.labelCfg.align ||
        'center') as any
      // wordWrap: true,
      // breakWords: true,
      // wordWrapWidth: (n.size || this.cfg.node.size) * 2
    });
    let text = new Text(
      this.nodeData.showName || this.nodeData.name || '',
      textStyle
    );
    text.anchor.set(0.5);
    return text;
  }

  update(node: INode) {
    this.nodeContainer.position.set(node.x, node.y);
  }
}
