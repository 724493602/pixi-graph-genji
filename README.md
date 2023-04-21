# pixi-graph-genji

## 一个基于pixi.js 实现关系图谱的库

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

> 模式和行为
> 模式中包含行为,默认行为现在有四个(drag-canvas 拖动画布 zoom-canvas 缩放画布 drag-node 拖动节点 create-edge 创建边)
```ts
const graph = new Graph({
    container: 'graph',
    fps: true,
    modes: {
        default: ['drag-node', 'drag-canvas', 'zoom-canvas', 'create-edge'],
        look: ['drag-canvas', 'zoom-canvas',]
    },
});
```
--- 系统默认模式为default
> 切换模式
```ts
  graph.setMode('look')
```
切换后的模式look 将只有look模式中的默认行为,default中的行为将被解绑

> 事件监听
```ts
graph.on('node:click', (e) => {
    console.log('节点点击', e);
});
```
| 事件名              | 说明         |
|------------------|------------|
| canvas:click     | canvas单击事件 |
| canvas:dbclick   | canvas双击事件 |
| canvas:mousemove | canvas双击事件 |
| canvas:mouseup   | canvas双击事件 |
| node:click       | 节点点击事件     |
| node:mouseenter  | 节点鼠标第一次进入  |
| node:mousemove   | 节点鼠标移动     |
| node:mouseout    | 节点鼠标移出     |
| node:mouseup     | 节点鼠标放开     |
| node:dragstart   | 节点开始拖动     |
| node:drag        | 节点拖动中      |
| node:dragend     | 节点拖动完成     |
| link:click       | 边点击事件      |
| link:mouseenter  | 边鼠标第一次进入   |
| link:mousemove   | 边鼠标移入      |
| link:mouseout    | 边鼠标移出      |
| link:mouseup     | 边鼠标放开      |

返回参数为pixi的事件对象event,再此之上拓展了3个参数 : _data_ 节点的原始数据, point viewport 缩放后的坐标, shape 对应pixi节点的container对象

> 样式
- 默认样式 要是设置defaultNode 会给所有节点设置相同的样式
```ts
 
const graph = new Graph({
  container: 'graph',
    defaultNode: {
        size: 25,
        style: {
            fill: '#bdd2fd'
        },
        labelCfg: {
            align: 'center',
            style: {
                fontSize: 12,
                fill: '#fff'
            }
        }
    },
    defaultLink: {
        style: {
            stroke: '#333333',
            lineWidth: 1
        },
        labelCfg: {
            align: 'center',
            style: {
                fontSize: 12,
                fill: '#000'
            },
            offset: {
                y: -8
            }
        }
    },
});
```

- 给单独节点设置各自的样式
```ts
let data = {
    nodes: [
        { id:'node1', name: '节点1', style: { fill: 'red' }, labelCfg: {
                style: {
                    fontSize: 12,
                    fill: '#000'
                },
                offset: {
                    y: -8
                }
            } },
        { id: 'node2', name: '节点2', style: { fill: 'red' } },
    ],
    links: [
        {source: 'node2', target: 'node1'}
    ]
}

graph.changeData(data)
```


---
感谢[antvis/G6](https://github.com/antvis/G6)库提供的思路借鉴