export enum ModeType {
  DragCanvas = 'drag-canvas',
  ZoomCanvas = 'zoom-canvas',
  DragNode = 'drag-node',
  CreateEdge = 'create-edge'
}
export type ModeTypeValue = `${ModeType}`;
export type ModeTypeKey = keyof typeof ModeType;

export interface Modes {
  default?: ModeTypeValue[];
  [key: string]: ModeTypeValue[] | undefined;
}
