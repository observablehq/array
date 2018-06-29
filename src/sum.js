export default function sum(values) {
  let sum = 0;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v) sum += v;
  }
  return sum;
}
