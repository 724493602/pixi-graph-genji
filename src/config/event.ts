export enum Event {
  AfterLayout = 'afterlayout',
  AfterSimulation = 'aftersimulation',
  INodeClick = 'node:click',
  INodeDoubleClick = 'node:doubleclick',
  INodeContextmenu = 'node:contextmenu',

  ILinkClick = 'link:click',
  ILinkDoubleClick = 'link:doubleclick',
  ILinkContextmenu = 'link:contextmenu',

  ICanvasClick = 'canvas:click',
  ICanvasDoubleClick = 'canvas:dblclick',

  IDrawLinkEnd = 'drawLink:end'
}
