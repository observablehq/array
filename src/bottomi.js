import ascending from "./ascending.js";
import descending from "./descending.js";
import topi from "./topi.js";

export default function bottomi(values, index, order = ascending) {
  if (order === ascending) return topi(values, index, descending);
  if (order === descending) return topi(values, index, ascending);
  let bottomIndex = -1, bottomValue;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (bottomIndex === -1 ? order(v, v) === 0 : order(bottomValue, v) > 0) bottomIndex = index[i], bottomValue = v;
  }
  return bottomIndex;
}
