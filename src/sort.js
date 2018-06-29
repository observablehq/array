import ascending from "./ascending.js";
import range from "./range.js";

export default function sort(values, order = ascending) {
  return range(values.length).sort((i, j) => order(values[i], values[j]));
}
