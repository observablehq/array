export default function min(values) {
  let minIndex, minValue = Infinity;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v < minValue) minIndex = i, minValue = v;
  }
  return minIndex;
}
