export default function counti(values, index) {
  let count = 0;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (v === v) ++count;
  }
  return count;
}
