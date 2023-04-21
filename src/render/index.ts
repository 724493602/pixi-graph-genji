import { ElementRender } from '@/types/abstract';
import { ILink, IModel, INode, ModeType } from '@/types';
import { Graph } from '@/graph/graph';
import {
  Application,
  Container,
  DisplayObject,
  Point,
  Ticker,
  Text,
  TextStyle
} from 'pixi.js';
import { Viewport } from 'pixi-viewport';
import CanvasEvents from './events';
import { ContainerName } from '@/types/cfg';
import CircleShape from '@/shape/nodes/circle';
import LineShape from '@/shape/links/line';
import QuadraticShape from '@/shape/links/quadratic';
import LoopShape from '@/shape/links/loop';

export default class CanvasRender extends ElementRender {
  app: Application;
  viewport: Viewport;
  canvasEvents: CanvasEvents;
  height: number;
  width: number;
  data: IModel;
  // 建立节点边和Container的weekMap 便于查找
  c2nodeWeekMap: WeakMap<Container<DisplayObject>, INode>;
  c2linkWeekMap: WeakMap<Container<DisplayObject>, ILink>;
  constructor(graph: Graph) {
    super(graph);
    this.init();
    this.initViewport();
    this.showFps();
  }
  init() {
    let el = document.getElementById(this.cfg.container) as HTMLElement;
    this.width = el.getBoundingClientRect().width;
    this.height = el.getBoundingClientRect().height;
    this.app = new Application({
      height: this.height,
      width: this.width,
      resolution: 2,
      // backgroundColor: new Color('#ccc').toNumber(),
      backgroundAlpha: 0,
      antialias: true,
      autoDensity: true
    });
    this.app.stage.eventMode = 'static';
    el.appendChild(this.app.view as HTMLCanvasElement);
  }

  initViewport() {
    this.viewport = new Viewport({
      worldWidth: this.width,
      worldHeight: this.height,
      events: this.app.renderer.events
    });
    this.app.stage.addChild(this.viewport);

    // let currentMode = this.graph.cfg.modes[this.graph.cfg.currentMode] || [];
    // let pressDrag = currentMode.includes(ModeType.DragCanvas);
    // let wheelZoom = currentMode.includes(ModeType.ZoomCanvas);
    this.viewport
      .drag()
      .pinch()
      .wheel()
      .decelerate({
        friction: 0
      })
      .clampZoom({
        minScale: this.cfg.zoom.minZoom,
        maxScale: this.cfg.zoom.maxZoom
      });
    this.viewport.moveCenter(0, 0);
    this.graph.viewport = this.viewport;
  }

  // 显示帧率
  showFps() {
    if (this.cfg.fps) {
      let textStyle = new TextStyle({
        fontSize: 20,
        fill: 'red'
      });
      let fps = new Text('', textStyle);
      fps.position.set(10, 10);
      this.app.stage.addChild(fps);
      let ticker = Ticker.shared;
      ticker.add(() => {
        fps.text = `FPS: ${Math.round(ticker.FPS)}`;
      });
    }
  }
  render(data: IModel): void {
    this.data = data;
    this.viewport.removeChildren();
    this.renderLinks(data.links);
    this.renderNodes(data.nodes);
    this.canvasEvents = new CanvasEvents(this);
  }

  renderNodes(nodes: INode[]) {
    let allNodesGroup = new Container();
    allNodesGroup.name = ContainerName.allNodesGroup;
    let nodesData = nodes.map((n) => {
      let circleShape = new CircleShape(this.cfg);
      let nodeContainer = circleShape.draw(n);
      n.shape = circleShape;
      allNodesGroup.addChild(nodeContainer);
      return [n, nodeContainer];
    });
    this.c2nodeWeekMap = new WeakMap(
      nodesData.map(([node, container]) => [
        container as Container,
        node as INode
      ])
    );
    this.graph.c2nodeWeekMap = this.c2nodeWeekMap;
    this.viewport.addChild(allNodesGroup);
  }

  renderLinks(links: ILink[]) {
    let allLinksGroup = new Container();
    allLinksGroup.name = ContainerName.allLinksGroup;
    let linksData = links.map((n) => {
      let lineShape;
      if (n._linkType === 'quadratic') {
        lineShape = new QuadraticShape(this.cfg);
      } else if (n._linkType === 'loop') {
        lineShape = new LoopShape(this.cfg);
      } else {
        lineShape = new LineShape(this.cfg);
      }

      let linkContainer = lineShape.draw(n);
      n.shape = lineShape;
      allLinksGroup.addChild(linkContainer);
      return [n, linkContainer];
    });

    this.c2linkWeekMap = new WeakMap(
      linksData.map(([link, container]) => [
        container as Container,
        link as ILink
      ])
    );
    this.graph.c2linkWeekMap = this.c2linkWeekMap;
    this.viewport.addChild(allLinksGroup);
  }

  update(): void {
    this.data.nodes.forEach((n) => {
      n.shape!.update(n);
    });
    this.data.links.forEach((n) => {
      n.shape!.update(n);
    });
  }

  // 根据屏幕坐标返回canvas缩放的全局坐标
  getPointByClient(clientX: number, clientY: number) {
    let point = new Point();
    this.app.renderer.plugins.interaction.mapPositionToPoint(
      point,
      clientX,
      clientY
    );
    return this.viewport.toWorld(point);
  }

  clear(): void {}

  destroy(): void {}
}
