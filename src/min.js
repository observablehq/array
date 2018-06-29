export default function min(values) {
  let minValue = Infinity;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v < minValue) minValue = v;
  }
  return minValue;
}
