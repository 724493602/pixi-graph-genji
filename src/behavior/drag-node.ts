import { BaseBehavior } from '../types';
import { Graph } from '../graph/graph';

export default class DragNode extends BaseBehavior {
  constructor(graph: Graph) {
    super(graph);
  }

  getEvents() {
    return {
      'node:dragstart': 'onDragstart',
      'node:drag': 'onNodeDrag',
      'node:dragend': 'onDragend'
    };
  }
  onDragstart() {
    this.graph.viewport.pause = true;
  }
  onNodeDrag(e: any) {
    e._data_.fx = e.point.x;
    e._data_.fy = e.point.y;
  }
  onDragend() {
    this.graph.viewport.pause = false;
  }
}
