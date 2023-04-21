import { Graph } from '../graph';
import { BaseBehavior, Modes } from '@/types';
import { IBehavior } from '@/behavior';
import ZoomCanvas from '@/behavior/zoom-canvas';
import DragCanvas from '@/behavior/drag-canvas';
import DragNode from '@/behavior/drag-node';
import CreateEdge from '@/behavior/create-edge';

export default class ModeController {
  private modes: Modes = {
    default: []
  };
  private behaviors: IBehavior;
  private currentBehaviors: BaseBehavior[] = [];
  private currentMode: string;
  constructor(private graph: Graph) {
    this.initBehavior();
    this.setMode(this.graph.cfg.currentMode);
  }

  initBehavior() {
    this.behaviors = {
      'zoom-canvas': new ZoomCanvas(this.graph),
      'drag-canvas': new DragCanvas(this.graph),
      'drag-node': new DragNode(this.graph),
      'create-edge': new CreateEdge(this.graph)
    };
  }
  bindBehavior() {
    let currentBehaviors = this.graph.cfg.modes[this.graph.currentMode];
    let behaviors = Object.keys(this.behaviors);
    currentBehaviors?.forEach((behavior) => {
      if (behaviors.includes(behavior)) {
        this.behaviors[behavior].bind();
        this.currentBehaviors.push(this.behaviors[behavior]);
      }
    });
  }
  unbindBehavior() {
    this.currentBehaviors.forEach((behavior) => {
      behavior.unbind();
    });
  }

  setMode(mode: string) {
    this.currentMode = mode;
    this.unbindBehavior();
    this.bindBehavior();
  }

  getMode() {
    return this.currentMode;
  }
}
