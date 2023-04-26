import type {
  SimulationNodeDatum,
  SimulationLinkDatum,
  Simulation
} from 'd3-force';

export * from './mode';
export * from './abstract';
export * from './cfg';
import { BaseShape } from '@/types/abstract';
import { IDefaultLinkStyle, IDefaultNodeStyle, ILabelCfg } from '@/types/cfg';

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type GraphSimulation = Simulation<INode, ILink>;

export interface INode extends SimulationNodeDatum {
  readonly id: string;
  rgb?: string;
  color?: string;
  name?: string;
  showName?: string;
  size?: number;
  x: number;
  y: number;
  fx?: number | undefined;
  fy?: number | undefined;
  noFix?: boolean | undefined;
  type?: string | undefined;
  level?: number;
  _weight?: number;
  shape?: BaseShape;
  _isShadow?: boolean;
  style?: Partial<IDefaultNodeStyle>;
  labelCfg?: Partial<ILabelCfg>;
}

export interface ILink extends SimulationLinkDatum<INode | INode> {
  readonly id: string;
  readonly _uid: string;
  /** 曲线直线type */
  _linkType: 'line' | 'quadratic' | 'loop';
  name?: string;
  showName?: string;
  linknum?: number;
  source: INode;
  target: INode;
  _weight?: number;
  _isShadow?: boolean;
  /** 相同的边，用于曲线加长 */
  _sameCount: number;
  _curveOffset?: number;
  shape?: BaseShape;
  loopCfg?: {
    dist: number;
    num: number;
  };
  style?: Partial<IDefaultLinkStyle>;
  labelCfg?: Partial<ILabelCfg>;
}

export type IModel = { nodes: INode[]; links: ILink[] };

type INodeC = Pick<INode, 'id'>;
type ILinkC = {
  source: string;
  target: string;
};
export type IPickModel = {
  nodes: INodeC[];
  links: ILinkC[];
};

export interface IPos {
  x: number;
  y: number;
}

export interface KV {
  [key: string | number | symbol]: any;
}

export type fitOptions = { padding: number; duration: number };
