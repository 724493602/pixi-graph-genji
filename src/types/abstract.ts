import { ILink, INode, IModel, IPos, ILayoutCfg } from '@/types/index';
import { Graph, GCfg } from '@/graph/graph';
import type { Container, DisplayObject } from 'pixi.js';

export interface IEvents {
  [key: string]: string;
}
// 渲染器抽象基类
export abstract class ElementRender {
  public graph: Graph;
  public cfg: GCfg;
  constructor(graph: Graph) {
    this.graph = graph;
    this.cfg = this.graph.cfg;
  }

  // 必须实现的方法
  abstract render(data: IModel): void;
  abstract update(): void;
  abstract clear(): void;
  abstract getPointByClient(clientX: number, clientY: number): IPos;
  abstract destroy(): void;
}

// 布局方法的抽象基类
export abstract class BaseLayout {
  protected nodes: INode[];
  protected links: ILink[];
  layout(data: IModel) {
    this.init(data);
    this.execute();
  }
  abstract updateCfg(cfg: any): void;
  abstract getCfg(): ILayoutCfg;
  abstract init(data: IModel): void;
  abstract execute(): void;
}

// 所有图形的抽象类
export abstract class BaseShape {
  constructor(protected cfg: GCfg) {}
  abstract draw(data: INode | ILink): Container<DisplayObject>;
  abstract update(data: INode | ILink): void;
}

// 行为的抽象类
export abstract class BaseBehavior {
  private eventHandlers: Record<string, Function> = {};
  constructor(protected graph: Graph) {}

  getDefaultCfg() {
    return {};
  }

  getEvents(): IEvents {
    return {};
  }

  shouldBegin() {
    return true;
  }
  shouldUpdate() {
    return true;
  }

  shouldEnd() {
    return true;
  }

  bind() {
    let _self = this;
    let events = this.getEvents();
    for (let i in events) {
      const handler = (_self as any)[events[i]].bind(_self);
      this.eventHandlers[i] = handler;
      this.graph.on(i, handler);
    }
  }

  unbind() {
    let events = this.getEvents();
    for (let i in events) {
      this.graph.off(i, this.eventHandlers[i]);
    }
  }
}
