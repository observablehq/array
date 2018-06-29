import ascending from "./ascending.js";

export default function topi(values, index, k = 1, order = ascending) {
  return index.slice()
      .sort((i, j) => order(values[j], values[i]))
      .slice(0, (k = +k) > 0 ? k : 0);
}
