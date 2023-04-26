# pixi-graph-genji

## 一个基于pixi.js 实现关系图谱的库
-基于webgl，gpu渲染，提供更流程的体验

[文档地址](https://724493602.github.io/docs/)
## 安装
```shell
npm i pixi-graph-genji --save
```

> 基础使用
```ts
import { Graph } from 'pixi-graph-genji'
const graph = new Graph({
    container: 'graph',
    fps: true,
    modes: {
        default: ['drag-node', 'drag-canvas', 'zoom-canvas', 'create-edge'],
        look: ['drag-canvas', 'zoom-canvas',]
    },
});
let data = {
    nodes: [
        { id:'node1', name: '节点1' },
        { id: 'node2', name: '节点2', style: { fill: 'red' } },
    ],
    links: [
        {source: 'node2', target: 'node1'}
    ]
}

graph.changeData(data)

graph.on('node:click', (e) => {
    console.log('节点点击', e);
});
```
---
感谢[antvis/G6](https://github.com/antvis/G6)库提供的思路借鉴