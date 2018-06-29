import ascending from "./ascending.js";

export default function top1(values, order = ascending) {
  let topIndex = -1, topValue;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (topIndex === -1 ? order(v, v) === 0 : order(topValue, v) < 0) topIndex = i, topValue = v;
  }
  return topIndex;
}
