import ascending from "./ascending.js";
import descending from "./descending.js";

export default function topi(values, index, order = ascending) {
  let topIndex = -1, topValue;
  if (order === ascending) {
    topValue = -Infinity;
    for (let i = 0, n = index.length; i < n; ++i) {
      const v = +values[index[i]];
      if (v > topValue) topIndex = index[i], topValue = v;
    }
  } else if (order === descending) {
    topValue = Infinity;
    for (let i = 0, n = index.length; i < n; ++i) {
      const v = +values[index[i]];
      if (v < topValue) topIndex = index[i], topValue = v;
    }
  } else {
    for (let i = 0, n = index.length; i < n; ++i) {
      const v = +values[index[i]];
      if (topIndex === -1 ? order(v, v) === 0 : order(topValue, v) < 0) topIndex = index[i], topValue = v;
    }
  }
  return topIndex;
}
