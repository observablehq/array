import ascending from "./ascending.js";

export default function bottom1i(values, index, order = ascending) {
  let bottomIndex = -1, bottomValue;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (bottomIndex === -1 ? order(v, v) === 0 : order(bottomValue, v) > 0) bottomIndex = index[i], bottomValue = v;
  }
  return bottomIndex;
}
