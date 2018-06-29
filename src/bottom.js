import ascending from "./ascending.js";
import descending from "./descending.js";
import top from "./top.js";

export default function bottom(values, order = ascending) {
  if (order === ascending) return top(values, descending);
  if (order === descending) return top(values, ascending);
  let bottomIndex = -1, bottomValue;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (bottomIndex === -1 ? order(v, v) === 0 : order(bottomValue, v) > 0) bottomIndex = i, bottomValue = v;
  }
  return bottomIndex;
}
