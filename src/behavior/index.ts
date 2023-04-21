import { BaseBehavior } from '../types';

export type IBehavior = { [key: string]: BaseBehavior };

export default class Behavior {
  public types: IBehavior;

  constructor() {}

  public registerBehavior(type: string, behavior: BaseBehavior) {
    this.types[type] = behavior;
  }

  hasBehavior(behavior: string) {
    return !!this.types[behavior];
  }

  public getBehavior(behavior: string) {
    return this.types[behavior];
  }
}
