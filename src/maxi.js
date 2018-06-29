export default function max(values, index) {
  let maxValue = -Infinity;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (v > maxValue) maxValue = v;
  }
  return maxValue;
}
