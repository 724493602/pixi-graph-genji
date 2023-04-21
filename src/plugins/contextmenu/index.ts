import { IPlugin } from '../index';
import type { Graph, DeepPartial, INode, ILink } from '@/index';
import { Event } from '@/lib/eventStore';
import { deepMerge, contains } from '@/utils/helper';

type IMenu = { id: string | number; name: string };

interface IOptions {
  offset: {
    x: number;
    y: number;
  };
  menu: IMenu[];
  handleMenuClick?: (target: INode | ILink, menu: IMenu) => void;
}

export class Contextmenu implements IPlugin {
  private options: IOptions;
  private graph: Graph;
  private container: HTMLElement;
  private graphEventData: INode | ILink;
  private handleCallback: any;
  constructor(options: DeepPartial<IOptions>) {
    this.options = deepMerge(this.getCfg(), options);
    this.initEl();
    this.initStyle();
    this.initEvent();
  }

  onInit(graph: Graph) {
    this.graph = graph;
    this.onNodeContextmenu();
  }

  getCfg(): IOptions {
    return {
      offset: {
        x: 0,
        y: 0
      },
      menu: [],
      handleMenuClick: undefined
    };
  }
  // 右键事件
  private onNodeContextmenu() {
    let handleCallback = (e: any, d: any) => {
      this.graphEventData = d;
      this.container.style.top = e.y + this.options.offset.y + 'px';
      this.container.style.left = e.x + this.options.offset.x + 'px';
      this.toggle(true);
    };
    this.handleCallback = handleCallback;
    this.graph.on(Event.INodeContextmenu, handleCallback);
  }

  private initEl() {
    let body = document.querySelector('body');
    let container = document.createElement('div');
    container.className = 't-graph-dropdown-menu';
    container.setAttribute('id', 't-g-menu');
    let html = '';
    this.options.menu?.forEach((n) => {
      html += `<div data-id=${String(n.id)} class="graph-dropdown-menu-item">${
        n.name
      }</div>`;
    });
    container.innerHTML = html;
    body?.append(container);

    this.container = container;
  }
  private initStyle() {
    let style = document.createElement('style'),
      str = `.t-graph-dropdown-menu{ display:none; position: fixed;background: rgb(255, 255, 255);border-radius: 2px;outline: none; padding: 4px; box-shadow: rgb(0 0 0 / 12%) 0px 3px 6px -4px, rgb(0 0 0 / 8%) 0px 6px 16px, rgb(0 0 0 / 5%) 0px 9px 28px 8px;left: 0px;top: 0px; }
      .graph-dropdown-menu-item{padding: 5px 12px;color: #000000d9;font-weight: 400;font-size: 14px;line-height: 22px;cursor: pointer;}
      .graph-dropdown-menu-item:hover{background:#f5f5f5}
      `;
    style.appendChild(document.createTextNode(str));
    style.setAttribute('id', 'g-graph-menu-css');
    document.getElementsByTagName('head')[0].appendChild(style);
  }
  private initEvent() {
    this.container.addEventListener('click', (e) => {
      let id = (e.target as HTMLElement).getAttribute('data-id');
      if (id) {
        let item = this.options.menu.find((n) => String(n.id) === id);
        if (item) {
          this.options.handleMenuClick?.(this.graphEventData, item);
        }
        this.toggle(false);
      }
    });
    document.addEventListener('click', this.eventClick);
  }
  toggle(visible: boolean) {
    this.container.style.display = visible ? 'block' : 'none';
  }

  private eventClick(e: MouseEvent) {
    let dom = document.getElementById('t-g-menu') as any;
    let display = dom.style.display;
    if (
      e.target !== dom &&
      !contains(dom, e.target as any) &&
      display === 'block'
    ) {
      dom.style.display = 'none';
    }
  }

  public destroy() {
    this.graph.off(Event.INodeContextmenu, this.handleCallback);
    document.removeEventListener('click', this.eventClick);
    document.querySelector('body')?.removeChild(this.container);
    let css = document.querySelector('#g-graph-menu-css');
    document.querySelector('head')?.removeChild(css as any);
  }
}
