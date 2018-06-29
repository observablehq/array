import ascending from "./ascending.js";

export default function top1i(values, index, order = ascending) {
  let topIndex = -1, topValue;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (topIndex === -1 ? order(v, v) === 0 : order(topValue, v) < 0) topIndex = index[i], topValue = v;
  }
  return topIndex;
}
