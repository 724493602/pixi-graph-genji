import { Graph } from '../src/index';

let graph = new Graph({
  container: 'graph',
  fps: true,
  modes: {
    default: ['drag-node', 'create-edge', 'drag-canvas', 'zoom-canvas']
  }
});
let data = {
  nodes: [
    { id: 'node1', name: 'node1' },
    { id: 'node2', name: 'node2', style: { fill: 'red' } },
    { id: 'node3', name: 'node3' },
    { id: 'node4', name: 'node4', size: 30 },
    { id: 'node5', name: 'node5' },
    { id: 'node6', name: 'node6' }
  ],
  links: [
    { source: 'node1', target: 'node2', name: 'link' },
    { source: 'node1', target: 'node2', name: 'link' },
    { source: 'node2', target: 'node3', name: 'link' },
    { source: 'node3', target: 'node4', name: 'link' },
    { source: 'node4', target: 'node5', name: 'link' },
    { source: 'node4', target: 'node6', name: 'link' }
  ]
};
graph.changeData(data);
