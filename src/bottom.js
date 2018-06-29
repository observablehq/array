import ascending from "./ascending.js";
import range from "./range.js";

export default function bottom(values, k = 1, order = ascending) {
  return range(values.length)
      .sort((i, j) => order(values[i], values[j]))
      .slice(0, (k = +k) > 0 ? k : 0);
}
