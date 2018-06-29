import ascending from "./ascending.js";
import range from "./range.js";

export default function top(values, k = 1, order = ascending) {
  return range(values.length)
      .sort((i, j) => order(values[j], values[i]))
      .slice(0, (k = +k) > 0 ? k : 0);
}
