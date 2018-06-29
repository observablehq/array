import ascending from "./ascending.js";

export default function bottom1(values, order = ascending) {
  let bottomIndex = -1, bottomValue;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (bottomIndex === -1 ? order(v, v) === 0 : order(bottomValue, v) > 0) bottomIndex = i, bottomValue = v;
  }
  return bottomIndex;
}
