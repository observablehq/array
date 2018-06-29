export default function mini(values, index) {
  let minIndex, minValue = Infinity;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (v < minValue) minIndex = index[i], minValue = v;
  }
  return minIndex;
}
