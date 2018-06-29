import ascending from "./ascending.js";
import descending from "./descending.js";
import top1 from "./top1.js";

export default function bottom1(values, order = ascending) {
  if (order === ascending) return top1(values, descending);
  if (order === descending) return top1(values, ascending);
  let bottomIndex = -1, bottomValue;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (bottomIndex === -1 ? order(v, v) === 0 : order(bottomValue, v) > 0) bottomIndex = i, bottomValue = v;
  }
  return bottomIndex;
}
