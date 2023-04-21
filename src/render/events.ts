import { INode, IPos } from '@/types';
import {
  FederatedEventTarget,
  Container,
  FederatedPointerEvent
} from 'pixi.js';
import CanvasRender from './index';
import { ContainerName } from '@/types/cfg';
import { Graph } from '@/graph/graph';
import { Event } from '@/config/event';
import { isEqual } from 'lodash-es';

export default class CanvasEvents {
  private graph: Graph;
  private drawLinkState: {
    isDrawing: boolean;
    startNode: INode | null | undefined;
    endNode: INode | null | undefined;
  } = {
    isDrawing: false,
    startNode: null,
    endNode: null
  };
  // 通过是否像素偏移来判断是点击还是拖动
  private isNodeClick = false;

  constructor(private canvas: CanvasRender) {
    this.graph = canvas.graph;
    this.initEvents();
  }

  initEvents() {
    this.canvas.app.stage.on('mousemove', (e) =>
      this.graph.emit('canvas:mousemove', e)
    );
    this.canvas.app.stage.on('mouseup', (e) =>
      this.graph.emit('canvas:mouseup', e)
    );
    this.canvasClick();
    let allNodesGroup = this.canvas.viewport.getChildByName(
      ContainerName.allNodesGroup
    );
    allNodesGroup!.children!.forEach((n) => {
      let nodeData = this.getNodeDataByContainer(n as Container);
      this.bindNodeEvent(n, nodeData as INode);
    });
    let allLinksGroup = this.canvas.viewport.getChildByName(
      ContainerName.allLinksGroup,
      true
    );
    allLinksGroup!.children!.forEach((n) => {
      this.bindLinkEvent(n as Container);
    });
  }

  // 画布单击和双击
  canvasClick() {
    let _self = this;
    function clickHandler(e: FederatedPointerEvent) {
      let point = _self.canvas.viewport.toWorld(e.data.global);
      _self.graph.emit(Event.ICanvasClick, Object.assign(e, { point }));
    }
    function doubleClickHandler(e: any) {
      let point = _self.canvas.viewport.toWorld(e.data.global);
      _self.graph.emit(Event.ICanvasDoubleClick, Object.assign(e, { point }));
    }

    let DELAY = 300,
      clicks = 0,
      timer: any = null;
    this.canvas.app.stage.eventMode = 'static';
    this.canvas.app.stage.on('mousedown', (e) => {
      clicks++;
      if (clicks === 1) {
        timer = setTimeout(function () {
          clickHandler(e);
          clicks = 0;
        }, DELAY);
      } else {
        clearTimeout(timer);
        doubleClickHandler(e);
        clicks = 0;
      }
    });
  }

  // 给节点绑定事件
  bindNodeEvent(node: FederatedEventTarget, nodeData: INode) {
    node.cursor = 'pointer';
    node.eventMode = 'static';
    node.on('click', (e) => {
      e.stopPropagation();
      // 过滤drag 拖动所触发的click
      if (this.isNodeClick) {
        this.emitDataOfNode(node as Container, Event.INodeClick, e);
      }
    });

    node.on('mouseenter', (e) =>
      this.emitDataOfNode(node as Container, 'node:mouseenter', e)
    );
    node.on('mousemove', (e) =>
      this.emitDataOfNode(node as Container, 'node:mousemove', e)
    );
    node.on('mouseout', (e) =>
      this.emitDataOfNode(node as Container, 'node:mouseout', e)
    );
    node.on('mouseup', (e) =>
      this.emitDataOfNode(node as Container, 'node:mouseup', e)
    );
    // 节点拖拽
    this.dragNodeEvent(node);
  }

  // 节点拖动事件
  dragNodeEvent(node: FederatedEventTarget) {
    let _self = this;
    let dragData: FederatedEventTarget | null = null;
    let startPoint: IPos;

    function dragStart(e: any) {
      dragData = node;
      _self.canvas.app.stage.on('mousemove', dragMove);
      _self.emitDataOfNode(node as Container, 'node:dragstart', e);
    }

    function dragMove(e: any) {
      if (!dragData) return;
      let _node = _self.getNodeDataByContainer(node as Container);
      if (_node) {
        _self.emitDataOfNode(node as Container, 'node:drag', e);
      }
    }

    function dragEnded(e: any) {
      dragData = null;
      _self.canvas.app.stage.off('mousemove', dragMove);
      _self.emitDataOfNode(node as Container, 'node:dragend', e);
    }

    node.on('mousedown', (e) => {
      e.stopPropagation();
      // 按下的鼠标坐标
      startPoint = Object.assign({}, e.data.global);
      dragStart(e);
    });
    node.on('mouseup', (e) => {
      // 鼠标按下和抬起的坐标是一样的才是click事件
      let endPoint = Object.assign({}, e.data.global);
      this.isNodeClick = isEqual(endPoint, startPoint);
      dragEnded(e);
    });
    node.on('mouseupoutside', (e) => {
      dragEnded(e);
    });
  }

  // 给线绑定事件
  bindLinkEvent(link: Container) {
    link.eventMode = 'static';
    link.cursor = 'pointer';
    let linkText = link.getChildByName(ContainerName.linkText);
    if (linkText) {
      linkText.eventMode = 'static';
      linkText.cursor = 'pointer';
    }
    link.on('click', (e) => {
      e.stopImmediatePropagation();
      this.graph.emit(
        Event.ILinkClick,
        Object.assign(e, {
          _data_: this.getLinkDataByContainer(link as Container)
        })
      );
    });
    link.on('mouseenter', (e) =>
      this.emitDataOfLink(link as Container, 'link:mouseenter', e)
    );
    link.on('mousemove', (e) =>
      this.emitDataOfLink(link as Container, 'link:mousemove', e)
    );
    link.on('mouseout', (e) =>
      this.emitDataOfLink(link as Container, 'link:mouseout', e)
    );
    link.on('mouseup', (e) =>
      this.emitDataOfLink(link as Container, 'link:mouseup', e)
    );
  }
  // 通过节点Container对象获取节点Data
  getNodeDataByContainer(c: Container) {
    return this.canvas.c2nodeWeekMap.get(c);
  }
  // 通过link Container对象获取linkData
  getLinkDataByContainer(c: Container) {
    return this.canvas.c2linkWeekMap.get(c);
  }

  emitDataOfNode(node: Container, eventId: string, e: any) {
    let point = this.canvas.viewport.toWorld(e.data.global);
    this.graph.emit(
      eventId,
      Object.assign(e, {
        _data_: this.getNodeDataByContainer(node),
        point,
        shape: node
      })
    );
  }

  emitDataOfLink(link: Container, eventId: string, e: any) {
    let point = this.canvas.viewport.toWorld(e.data.global);
    this.graph.emit(
      eventId,
      Object.assign(e, {
        _data_: this.getLinkDataByContainer(link),
        point,
        shape: link
      })
    );
  }
}
