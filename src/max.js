export default function max(values) {
  let maxIndex, maxValue = -Infinity;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v > maxValue) maxIndex = i, maxValue = v;
  }
  return maxIndex;
}
