export default function max(values) {
  let maxValue = -Infinity;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v > maxValue) maxValue = v;
  }
  return maxValue;
}
