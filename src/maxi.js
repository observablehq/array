export default function maxi(values, index) {
  let maxIndex, maxValue = -Infinity;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (v > maxValue) maxIndex = index[i], maxValue = v;
  }
  return maxIndex;
}
