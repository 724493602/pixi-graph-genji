import { BaseBehavior } from '@/types';
import { Graph } from '../graph/graph';

export default class DragCanvas extends BaseBehavior {
  constructor(graph: Graph) {
    super(graph);
  }

  bind() {
    super.bind();
    this.graph.viewport.plugins.resume('drag');
  }
  unbind() {
    super.unbind();
    this.graph.viewport.plugins.pause('drag');
  }
}
