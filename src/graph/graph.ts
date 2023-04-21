import { Viewport } from 'pixi-viewport';
import EventEmitter from '../utils/event-emitter';
import LayoutController from './controller/layout';
import ModeController from './controller/mode';
import {
  DeepPartial,
  fitOptions,
  IModel,
  ICfg,
  IPickModel,
  IForceCfg,
  INode,
  ILink
} from '@/types';
import { merge, cloneDeep } from 'lodash-es';
import config from '../config';
import { version } from 'package.json';
import { Container, DisplayObject } from 'pixi.js';
export type GCfg = ICfg & { [key: string]: any };
export class Graph extends EventEmitter {
  public cfg: GCfg;
  private layoutController: LayoutController;
  private modeController: ModeController;
  public viewport: Viewport;
  public data: IModel = { nodes: [], links: [] };
  c2nodeWeekMap: WeakMap<Container<DisplayObject>, INode>;
  c2linkWeekMap: WeakMap<Container<DisplayObject>, ILink>;
  constructor(cfg: DeepPartial<ICfg>) {
    super();
    this.cfg = merge(this.getDefaultCfg(), cfg);
    this.init();
    if (cfg.debug) {
      console.warn('[ pixi-graph-genji ] version:' + version);
    }
  }

  private getDefaultCfg() {
    return cloneDeep<ICfg>(config);
  }

  private init() {
    this.layoutController = new LayoutController(this);
    this.modeController = new ModeController(this);
  }

  // 修改数据 不传参数就是重新渲染
  public changeData(data?: IPickModel) {
    if (data === undefined) {
      this.layoutController.reRender();
    } else {
      this.layoutController.changeData(data);
    }
  }

  // 消除以前的坐标信息和视图
  public clearState() {
    this.data = {
      nodes: [],
      links: []
    };
    this.layoutController.clearView();
  }

  //  更新布局配置
  public updateLayout(cfg: DeepPartial<IForceCfg>) {
    this.cfg.layout = merge(this.cfg.layout, cfg);
    this.layoutController.updateLayout(cfg);
  }

  // 使全部元素缩放平移到视口中心
  public fitView(option: fitOptions) {}

  // 设置行为模式
  setMode(mode: string) {
    let keys = Object.keys(this.cfg.modes);
    if (!keys.includes(mode)) {
      console.warn(`当前暂未配置模式：${mode}, 已配置：${keys.join(',')}`);
      return;
    }
    this.cfg.currentMode = mode;
    this.modeController.setMode(mode);
  }

  // 将屏幕/页面坐标转换为画布渲染坐标。
  getPointByClient(clientX: number, clientY: number) {
    return this.layoutController.getPointByClient(clientX, clientY);
  }

  // 获取当前行为模式
  get currentMode() {
    return this.cfg.currentMode;
  }

  // 返回配置的设置
  get layoutCfg() {
    return this.layoutController.getLayoutCfg();
  }

  // 销毁
  public destroy() {
    this.clearEvents();
    this.clearState();
    (this.layoutController as any) = null;
    (this.modeController as any) = null;
  }
}
