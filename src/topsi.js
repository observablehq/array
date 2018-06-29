import ascending from "./ascending.js";

export default function topsi(values, index, k = 5, order = ascending) {
  return index.slice()
      .sort((i, j) => order(values[j], values[i]))
      .slice(0, (k = +k) > 0 ? k : 0);
}
