import ascending from "./ascending.js";

export default function bottomsi(values, index, k = 5, order = ascending) {
  return index.slice()
      .sort((i, j) => order(values[i], values[j]))
      .slice(0, (k = +k) > 0 ? k : 0);
}
