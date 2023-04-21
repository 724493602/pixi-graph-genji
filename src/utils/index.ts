export function vee(width: number = 15, length: number = 20, d: number = 0) {
  const begin = d * 2;
  const path = `M ${begin},0 L ${begin + length},-${width / 2}
        L ${begin + (2 * length) / 3},0 L ${begin + length},${width / 2} Z`;
  return path;
}
