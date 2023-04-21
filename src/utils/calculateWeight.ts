import { ILink, INode } from '@/types';
import { getValueByKey } from '@/utils/helper';

/**
 * @description: 计算节点和链接权重
 * @param {object} data
 * @return {*}
 */
export const calculateWeight = (data: { nodes: INode[]; links: ILink[] }) => {
  let nodeWeight = new Map();
  data.nodes.map((node) => {
    let _weight = data.links.filter(
      (link) =>
        getValueByKey(link.source) === node.id ||
        getValueByKey(link.target) === node.id
    ).length;
    node._weight = _weight;
    nodeWeight.set(node.id, _weight);
  });

  data.links.map((link) => {
    let targetNodeWeight = nodeWeight.get(getValueByKey(link.target));
    let sorceNodeWeight = nodeWeight.get(getValueByKey(link.source));
    link._weight = Math.max(targetNodeWeight, sorceNodeWeight);
  });
};
