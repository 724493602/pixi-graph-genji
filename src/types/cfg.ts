import { Modes } from '../types';
import type { IPlugin } from '@/plugins/pluginSystem';

export interface ICfg {
  container: string; // 渲染的容器id
  debug: boolean; //是否开启debug
  fps: boolean; //是否开启FPS显示
  defaultNode: IDefaultNodeCfg;
  defaultLink: IDefaultLinkCfg;
  zoom: {
    minZoom: number;
    maxZoom: number;
  };
  currentMode: 'default' | string;
  modes: Modes;
  plugins: IPlugin[];
  layout?: ILayout;
}

export interface ILayout extends IForceCfg {
  type: 'force';
}
export type ILayoutCfg = IForceCfg; // IForceCfg&[other]

type fn = null | ((e?: any) => number);

export interface IForceCfg {
  charge: {
    enabled: boolean;
    autoCalcStrength: boolean;
    strength: number;
    theta: number;
    strengthFn: fn;
  };
  collide: {
    enabled: boolean;
    strength: number;
    radius: number;
    iterations: number;
    strengthFn: fn;
  };
  link: {
    enabled: boolean;
    autoCalcLength: boolean;
    strength: number;
    length: number;
    minLength: number;
    strengthFn: fn;
  };
  alpha: number;
  minVelocityDecay: number;
  customVelocityDecay: null | number;
  xForce: {
    enabled: boolean;
    x: number;
    xFn: fn;
    strength: number;
    strengthFn: fn;
  };
  yForce: {
    enabled: boolean;
    y: number;
    yFn: fn;
    strength: number;
    strengthFn: fn;
  };
  radialForce: {
    x: number;
    y: number;
    diffRadius: number;
    enabled: boolean;
    border: boolean;
    rFn: fn;
    strengthFn: fn;
  };
  center: {
    x: number;
    y: number;
    enabled: boolean;
    strength: number;
  };
  onTick: () => void;
  onLayoutEnd: () => void;
}

export enum ContainerName {
  allNodesGroup = 'allNodesGroup', // 所有节点的总的group
  nodeContainer = 'nodeContainer', // 每个节点的group
  nodeCircle = 'nodeCircle', // 节点的圆形
  allLinksGroup = 'allLinksGroup',
  linkContainer = 'linkContainer',
  linkLine = 'linkLine',
  linkQuadratic = 'linkQuadratic',
  linkLoop = 'linkLoop',
  linkText = 'linkText',
  linkArrow = 'linkArrow',
  addLink = 'addLink',
  addLinkLine = 'addLinkLine'
}
export interface IDefaultNodeStyle {
  fill: number | string;
  stroke?: number | string;
  lineWidth?: number;
  shadowColor?: number | string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  opacity?: number;
  fillOpacity?: number;
  cursor?: string;
}
export interface ILabelCfg {
  align?: 'center' | string; // 文字位置
  offset?: { x?: number; y?: number };
  style: {
    fill: number | string;
    fontSize: number;
    opacity?: number;
    lineWidth?: number;
  };
}
export interface IDefaultNodeCfg {
  size: number;
  style: IDefaultNodeStyle;
  labelCfg: ILabelCfg;
}
export interface IDefaultLinkStyle {
  stroke: number | string;
  lineWidth: number;
  lineAppendWidth?: number; //边响应鼠标事件时的检测宽度，当 lineWidth 太小而不易选中时，可以通过该参数提升击中范围
  strokeOpacity?: number; // 边透明度
  lineDash?: number;
  cursor?: string;
}

export interface IDefaultLinkCfg {
  style: IDefaultLinkStyle;
  labelCfg: ILabelCfg;
}
