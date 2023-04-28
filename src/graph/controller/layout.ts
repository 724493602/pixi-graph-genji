import type { Graph, GCfg } from '../graph';
import CanvasRender from '@/render';
import {
  IModel,
  BaseLayout,
  IPickModel,
  DeepPartial,
  IForceCfg,
  fitOptions
} from '@/types';
import Force from '../../layouts/force';
import { processParallelEdges } from '@/utils/point';
export default class LayoutController {
  private cfg: GCfg;
  private canvasRender: CanvasRender;
  private layoutClass: BaseLayout;
  constructor(private graph: Graph) {
    this.cfg = this.graph.cfg;
    this.initLayout();
  }

  initLayout() {
    // 不存在布局配置就默认力导图
    if (!this.cfg.layout || !this.cfg.layout.type) {
      this.cfg.layout = {
        type: 'force'
      } as any;
    }
    this.canvasRender = new CanvasRender(this.graph);
    if (this.cfg?.layout?.type === 'force') {
      this.layoutClass = new Force(this.cfg.layout);
      // 力导图 额外执行每次Tick重新渲染
      let { onTick } = this.cfg.layout;
      (this.layoutClass as Force).onTick = () => {
        this.canvasRender.update();
        onTick && onTick();
      };
    }
    this.forceLayoutOnDrag();
  }

  // 清除视图
  clearView() {
    this.canvasRender.clear();
  }
  // force布局 监听拖动并且计算位置
  forceLayoutOnDrag() {
    if (this.cfg?.layout?.type === 'force') {
      this.graph.on('node:dragstart', () => {
        (this.layoutClass as Force).simulation.alphaTarget(0.3).restart();
      });
      this.graph.on('node:dragend', () => {
        (this.layoutClass as Force).simulation.alphaTarget(0);
      });
    }
  }

  // todo 根据配置执行某个布局
  execLayoutMethod(data: IModel) {
    this.layoutClass.layout(data);
  }

  // 修改数据重新布局
  changeData(data: IPickModel) {
    // 预处理数据,保持原来的坐标和加速度
    let nData = this.holdNodesPosition(data);
    this.graph.data = nData as unknown as IModel;
    // 给每条边分类型和ID
    processParallelEdges(this.graph.data.links);
    // 渲染节点
    this.canvasRender.render(this.graph.data);
    // 调用布局方法计算坐标重新渲染
    this.execLayoutMethod(this.graph.data);
  }

  //修改布局配置信息并且重新布局
  updateLayout(cfg: DeepPartial<IForceCfg> = {}) {
    if (this.cfg!.layout!.type === 'force') {
      (this.layoutClass as Force).updateCfg(cfg);
      this.canvasRender.render(this.graph.data);
      (this.layoutClass as Force).execute();
    }
  }

  // 不修改数据重新渲染
  public reRender() {
    this.canvasRender.render(this.graph.data);
    this.execLayoutMethod(this.graph.data);
  }

  // 回收旧节点以保持位置和速度。
  holdNodesPosition = (data: IPickModel) => {
    let node = this.graph.data.nodes;
    let link = this.graph.data.links;
    const old = new Map(node.map((d: any) => [d.id, d]));
    const oldLink = new Map(link.map((d: any) => [d.id, d]));
    data.nodes = data.nodes.map((d) => Object.assign(old.get(d.id) || {}, d));
    data.links = data.links.map((d: any, i) => {
      let id;
      if (Object.prototype.toString.call(d.source) === '[object Object]') {
        id = `${d.source?.id}-${d.target?.id}-${i}`;
      } else {
        id = `${d.source}-${d.target}-${i}`;
      }
      return Object.assign(oldLink.get(d.id) || {}, { id }, d);
    });
    data.links.forEach((n) => {
      if (Object.prototype.toString.call(n.source) !== '[object Object]') {
        (n.source as any) = data.nodes.find((d) => d.id === (n.source as any));
      }
      if (Object.prototype.toString.call(n.target) !== '[object Object]') {
        (n.target as any) = data.nodes.find((d) => d.id === (n.target as any));
      }
    });
    return data;
  };

  getPointByClient(clientX: number, clientY: number) {
    return this.canvasRender.getPointByClient(clientX, clientY);
  }

  getLayoutCfg() {
    return this.layoutClass.getCfg();
  }

  getCanvasRender() {
    return this.canvasRender;
  }
}
