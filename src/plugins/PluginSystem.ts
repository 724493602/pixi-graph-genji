import type { Graph } from '../index';

export interface IPlugin {
  onInit(graph: Graph): void;
  destroy: () => void;
}

export default class PluginSystem {
  constructor(private graph: Graph, private plugins: IPlugin[] = []) {
    if (~plugins.length) {
      plugins.forEach((plugin) => this.use(plugin));
    }
  }
  private use(plugin: IPlugin) {
    plugin.onInit(this.graph);
  }
  destroy() {
    if (~this.plugins.length) {
      this.plugins.forEach((plugin) => plugin.destroy());
    }
  }
}
