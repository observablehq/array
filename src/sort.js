import ascending from "./ascending.js";

export default function sort(values, order = ascending) {
  return range(values.length).sort((i, j) => order(values[i], values[j]));
}
