import { vec2 } from 'gl-matrix';
import { uuidV4, getValueByKey } from '@/utils/helper';
import { getPosAverage, Coords } from './helper';
interface IPoint {
  x: number;
  y: number;
}

// 获取圆的外边上的点
export const getCirclePont = (
  source: IPoint,
  target: IPoint,
  nodeRadius = 30
) => {
  const arrowheadLength = 0;
  const angle = Math.atan2(target.y - source.y, target.x - source.x);
  let x = target.x - Math.cos(angle) * (nodeRadius + arrowheadLength);
  let y = target.y - Math.sin(angle) * (nodeRadius + arrowheadLength);
  return { x, y };
};

export const getControlPoint = (
  startPoint: IPoint,
  endPoint: IPoint,
  percent: number = 0,
  offset: number = 0
): IPoint => {
  const point: IPoint = {
    x: (1 - percent) * startPoint.x + percent * endPoint.x,
    y: (1 - percent) * startPoint.y + percent * endPoint.y
  };

  let tangent: any = [0, 0];
  vec2.normalize(tangent, [
    endPoint.x - startPoint.x,
    endPoint.y - startPoint.y
  ]);

  if (!tangent || (!tangent[0] && !tangent[1])) {
    tangent = [0, 0];
  }
  const perpendicular = [-tangent[1] * offset, tangent[0] * offset]; // 垂直向量
  point.x += perpendicular[0];
  point.y += perpendicular[1];
  return point;
};

/**
 * 若 edges 中存在两端点相同的边，使用 quadratic 边并自动计算 _curveOffset 使它们不相互重叠
 * @param edges 边数据集合
 * @param offsetDiff 相邻两边的 offset 之差
 */
export const processParallelEdges = (edges: any[], offsetDiff = 30) => {
  let singleEdgeType = 'line';
  let multiEdgeType = 'quadratic';
  let loopEdgeType = 'loop';
  const len = edges.length;
  const cod = offsetDiff * 2;
  const edgeMap: any = {};
  const tags = [];
  const reverses: any = {};
  for (let i = 0; i < len; i++) {
    const edge = edges[i];
    const source = getValueByKey(edge.source);
    const target = getValueByKey(edge.target);
    const sourceTarget = `${source}-${target}`;

    if (tags[i]) continue;
    if (!edgeMap[sourceTarget]) {
      edgeMap[sourceTarget] = [];
    }
    tags[i] = true;
    edgeMap[sourceTarget].push(edge);
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      const sedge = edges[j];
      const src = getValueByKey(sedge.source);
      const dst = getValueByKey(sedge.target);

      // 两个节点之间共同的边
      // 第一条的source = 第二条的target
      // 第一条的target = 第二条的source
      if (!tags[j]) {
        if (source === dst && target === src) {
          edgeMap[sourceTarget].push(sedge);
          tags[j] = true;
          reverses[`${src}|${dst}|${edgeMap[sourceTarget].length - 1}`] = true;
        } else if (source === src && target === dst) {
          edgeMap[sourceTarget].push(sedge);
          tags[j] = true;
        }
      }
    }

    for (const key in edgeMap) {
      const arcEdges = edgeMap[key];
      const { length } = arcEdges;
      for (let k = 0; k < length; k++) {
        const current = arcEdges[k];
        current._uid = uuidV4();
        if (getValueByKey(current.source) === getValueByKey(current.target)) {
          if (loopEdgeType) current._linkType = loopEdgeType;
          // 超过8条自环边，则需要重新处理
          current.loopCfg = {
            num: k,
            dist: Math.floor(k / 8) * 20 + 50
          };
          continue;
        }
        if (
          length === 1 &&
          singleEdgeType &&
          getValueByKey(current.source) !== getValueByKey(current.target)
        ) {
          current._linkType = singleEdgeType;
          continue;
        }
        current._linkType = multiEdgeType;
        current._sameCount = length;
        const sign =
          (k % 2 === 0 ? 1 : -1) *
          (reverses[
            `${getValueByKey(current.source)}|${getValueByKey(
              current.target
            )}|${k}`
          ]
            ? -1
            : 1);
        if (length % 2 === 1) {
          current._curveOffset = sign * Math.ceil(k / 2) * cod;
        } else {
          current._curveOffset = sign * (Math.floor(k / 2) * cod + offsetDiff);
        }
      }
    }
  }
};

// 取数值中位数， 如果是偶数就取两个中心坐标的坐标中点(不然会出现抖动)
export function getCenterCoordinate(coordinates: number[]): Coords {
  const result = [];
  for (let i = 0; i < coordinates.length; i += 2) {
    const x = coordinates[i];
    const y = coordinates[i + 1];
    const point = { x, y };
    result.push(point);
  }
  if (result.length % 2 === 0) {
    return getPosAverage(
      result[result.length / 2 - 1],
      result[result.length / 2]
    );
  } else {
    return result[Math.floor(result.length / 2)];
  }
}

export function twoPointDistance(p1: IPoint, p2: IPoint) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

export function getPointOnDistanceOverRadius(points: number[], radius: number) {
  const result = [];
  for (let i = 0; i < points.length; i += 2) {
    const x = points[i];
    const y = points[i + 1];
    const point = { x, y };
    result.push(point);
  }
  result.reverse();
  let point = result[0];
  return result.find((n) => {
    return twoPointDistance(n, point) > radius;
  });
}
