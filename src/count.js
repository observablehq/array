export default function count(values) {
  let count = 0;
  for (let i = 0, n = values.length; i < n; ++i) {
    const v = +values[i];
    if (v === v) ++count;
  }
  return count;
}
