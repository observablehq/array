export default function sumi(values, index) {
  let sum = 0;
  for (let i = 0, n = index.length; i < n; ++i) {
    const v = +values[index[i]];
    if (v) sum += v;
  }
  return sum;
}
