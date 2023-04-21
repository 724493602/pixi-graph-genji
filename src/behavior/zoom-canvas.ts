import { BaseBehavior, IEvents } from '@/types';
import { Graph } from '../graph/graph';

export default class ZoomCanvas extends BaseBehavior {
  constructor(protected graph: Graph) {
    super(graph);
  }
  bind() {
    super.bind();
    this.graph.viewport.plugins.resume('wheel');
  }
  unbind() {
    super.unbind();
    this.graph.viewport.plugins.pause('wheel');
  }
}
