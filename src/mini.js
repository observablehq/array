export default function min(values, index) {
  let minValue = Infinity;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (v < minValue) minValue = v;
  }
  return minValue;
}
