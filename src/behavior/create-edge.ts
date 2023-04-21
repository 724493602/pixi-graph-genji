import { BaseBehavior, ContainerName, INode } from '../types';
import { Graph } from '../graph/graph';
import { Container, FederatedPointerEvent, Graphics } from 'pixi.js';
import { DashLineShader, SmoothGraphics } from '@pixi/graphics-smooth';
import { getCirclePont } from '@/utils/point';
import { Event } from '@/config/event';
import { getIntersectPos } from '@/utils/helper';

export default class CreateEdge extends BaseBehavior {
  private drawLinkState: {
    isDrawing: boolean;
    startNode: INode | null | undefined;
    endNode: INode | null | undefined;
  } = {
    isDrawing: false,
    startNode: null,
    endNode: null
  };

  constructor(graph: Graph) {
    super(graph);
  }

  getEvents() {
    return {
      'node:mouseenter': 'mouseenter',
      'node:mousemove': 'mousemove',
      'node:mouseout': 'mouseout',
      'node:mouseup': 'mouseup'
    };
  }

  mouseenter(e: any) {
    let node = e.shape;
    if (!node.getChildByName(ContainerName.addLink)) {
      node.addChild(this.createAddLinkGraphics());
    }
  }
  mousemove(e: any) {
    let node = e.shape;
    let nodeData = e._data_;
    let addLink = node.getChildByName(ContainerName.addLink);
    let radius = nodeData.size;
    // 鼠标相对于node的坐标
    let localMousePoint = node.toLocal(e.data.global);
    let point = getIntersectPos(
      localMousePoint.x,
      localMousePoint.y,
      0,
      0,
      radius || this.graph.cfg.defaultNode.size
    );
    addLink!.position.set(point.x, point.y);
    addLink!.visible = !this.drawLinkState.isDrawing;
    // 在画线状态中划过节点，显示节点的边框
    this.renderNodeBorder(node, nodeData, true);
  }

  mouseout(e: any) {
    let node = e.shape;
    let nodeData = e._data_;
    let drawLink = node.getChildByName(ContainerName.addLink);
    drawLink!.visible = false;
    this.renderNodeBorder(node, nodeData);
  }

  mouseup(e: any) {
    if (!this.drawLinkState.isDrawing) return;
    let node = e.shape;
    let nodeData = e._data_;
    this.renderNodeBorder(node, nodeData);
  }

  // 创建一个看不见的圆圈用于做线的连接;
  createAddLinkGraphics() {
    let _self = this;
    let dragData: null | { x: number; y: number } = null;
    let circle = new Graphics();
    circle.name = ContainerName.addLink;
    circle.beginFill('#fff');
    circle.lineStyle({
      width: 2,
      color: 'rgb(0, 199, 117)'
    });
    circle.drawCircle(0, 0, 8);
    circle.cursor = 'cell';
    circle.eventMode = 'static';
    circle.visible = false;
    this.graph.viewport.addChild(circle);
    circle.on('mouseenter', () => {
      circle.visible = true;
    });
    circle.on('mouseout', (e) => {
      circle.visible = false;
    });
    circle.on('mousedown', dragStart);
    return circle;

    function dragStart(e: FederatedPointerEvent) {
      e.stopPropagation();
      let parent = e.target.parent as Container;
      dragData = parent.position;
      _self.drawLinkState.isDrawing = true;
      _self.drawLinkState.startNode = _self.getNodeDataByContainer(parent);
      let line = new SmoothGraphics();
      line.name = ContainerName.addLinkLine;
      _self.graph.viewport.addChild(line);
      _self.graph.on('canvas:mousemove', dragMove);
      _self.graph.on('canvas:mouseup', dragEnd);
      _self.graph.viewport.pause = true;
    }

    function dragMove(e: FederatedPointerEvent) {
      if (!dragData) return;
      let point = _self.graph.viewport.toWorld(e.data.global);

      let line = _self.graph.viewport.getChildByName<SmoothGraphics>(
        ContainerName.addLinkLine
      );
      const shader = new DashLineShader({ dash: 5, gap: 8 });
      line!.clear();
      line!.lineStyle({
        color: 'orange',
        width: 2,
        shader
      });
      let startPoint = getCirclePont(
        point,
        dragData,
        _self.graph.cfg.defaultNode.size
      );
      line!.moveTo(startPoint.x, startPoint.y);
      line!.lineTo(point.x, point.y);
    }

    function dragEnd(e: FederatedPointerEvent) {
      dragData = null;
      _self.drawLinkState.isDrawing = false;
      let line = _self.graph.viewport.getChildByName<SmoothGraphics>(
        ContainerName.addLinkLine
      );
      line!.destroy();
      _self.graph.off('canvas:mousemove', dragMove);
      _self.graph.off('canvas:mouseup', dragEnd);
      _self.graph.viewport.pause = false;
      // 如果落在node上 就发送拖拽完成消息
      let endTarget = e.target as Container;
      if (endTarget?.name == 'nodeContainer') {
        _self.drawLinkState.endNode = _self.getNodeDataByContainer(endTarget);
        _self.graph.emit(Event.IDrawLinkEnd, {
          startNode: _self.drawLinkState.startNode,
          endNode: _self.drawLinkState.endNode
        });
        _self.drawLinkState.isDrawing = false;
        _self.drawLinkState.startNode = null;
        _self.drawLinkState.endNode = null;
      }
    }
  }

  renderNodeBorder(node: Container, nodeData: INode, showBorder = false) {
    if (this.drawLinkState.isDrawing) {
      let nodeCircle = node.getChildByName<Graphics>(ContainerName.nodeCircle);
      nodeCircle!.clear();
      if (showBorder) {
        nodeCircle!.lineStyle({
          color: 'orange',
          width: 1
        });
      }
      nodeCircle!.beginFill(
        nodeData.style?.fill || this.graph.cfg.defaultNode.style.fill
      );
      nodeCircle!.drawCircle(
        0,
        0,
        nodeData.size || this.graph.cfg.defaultNode.size
      );
      nodeCircle!.endFill();
    }
  }

  // 通过节点Container对象获取节点Data
  getNodeDataByContainer(c: Container) {
    return this.graph.c2nodeWeekMap.get(c);
  }
}
