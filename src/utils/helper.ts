export interface Coords {
  x: number;
  y: number;
  [key: string]: any;
}

export const calm = (xOry: number, lo: number, wrap: number) => {
  return xOry < lo ? lo : xOry > wrap ? wrap : xOry;
};

/**
 * @description: 冷却布局，不在自动变化
 * @param {D3Selection} container
 * @param {number} width
 * @param {number} height
 * @return {*}
 */
export const calmGraph = (container: any, width: number, height: number) => {
  container.selectAll('.node').each((d: any) => {
    d.fx = calm(d.x as number, 0, width);
    d.fy = calm(d.y as number, 0, height);
  });
};

/**
 * @description: 获取点到圆的焦点
 * @param {number} x1 点的坐标
 * @param {number} y1 点的坐标
 * @param {number} x2 圆心坐标
 * @param {number} y2 圆心坐标
 * @param {number} r 圆半径
 * @return {*}
 */
export const getIntersectPos = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  r: number
) => {
  const dist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  const x = (r / dist) * (x1 - x2) + x2;
  const y = (r / dist) * (y1 - y2) + y2;
  return { x, y, dist };
};

/**
 * @description: 获取link线与水平线的夹角
 * @param {number} point1 点的坐标
 * @param {number} point2 点的坐标
 * @return {number}
 */
export const getAngle = (point1: Coords, point2: Coords): number => {
  let radian = Math.atan2(point2.y - point1.y, point2.x - point1.x);
  return radian * (180 / Math.PI);
};

/**
 * @description: 获取两个坐标的中点
 * @param {number} point1 点的坐标
 * @param {number} point2 点的坐标
 * @return {x,y}
 */

export const getPosAverage = (point1: Coords, point2: Coords): Coords => {
  return { x: (point1.x + point2.x) / 2, y: (point1.y + point2.y) / 2 };
};

export const uuidV4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString();
  });
};

/**
 * @description: 获取区间随机数
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export const getRandomBoth = (min: number, max: number) => {
  if (min > max) {
    [min, max] = [max, min]; // 交换
  }
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function getValueByKey(val: any, key = 'id') {
  // d3 会把source 从string 改为连接点的对象
  return typeof val === 'string' ? val : val[key];
}

// 深度合并
export function deepMerge<T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U {
  const result = {} as T & U;
  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      (result as any)[key] = (obj1 as any)[key];
    }
  }
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof (obj2 as any)[key] === 'object') {
        if (Array.isArray((obj2 as any)[key])) {
          (result as any)[key] = (obj2 as any)[key];
        } else {
          (result as any)[key] = deepMerge(
            (obj1 as any)[key],
            (obj2 as any)[key]
          );
        }
      } else {
        (result as any)[key] = (obj2 as any)[key];
      }
    }
  }
  return result;
}

// 当前DOM元素是否被包含
export function contains(parent: HTMLElement, node: HTMLElement) {
  // @ts-ignore
  if (document.documentElement.contains) {
    if (parent && parent.contains) {
      return parent !== node && parent.contains(node);
    } else {
      return false;
    }
  } else {
    while (node && (node = node.parentNode as HTMLElement))
      if (node === parent) return true;
    return false;
  }
}
