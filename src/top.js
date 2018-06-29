import ascending from "./ascending.js";
import descending from "./descending.js";

export default function top(values, order = ascending) {
  let topIndex = -1, topValue;
  if (order === ascending) {
    topValue = -Infinity;
    for (let i = 0, n = values.length; i < n; ++i) {
      const v = +values[i];
      if (v > topValue) topIndex = i, topValue = v;
    }
  } else if (order === descending) {
    topValue = Infinity;
    for (let i = 0, n = values.length; i < n; ++i) {
      const v = +values[i];
      if (v < topValue) topIndex = i, topValue = v;
    }
  } else {
    for (let i = 0, n = values.length; i < n; ++i) {
      const v = +values[i];
      if (topIndex === -1 ? order(v, v) === 0 : order(topValue, v) < 0) topIndex = i, topValue = v;
    }
  }
  return topIndex;
}
