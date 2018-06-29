import ascending from "./ascending.js";

export default function sorti(values, index, order = ascending) {
  return index.slice().sort((i, j) => order(values[i], values[j]));
}
