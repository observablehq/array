export default function filter(values, test) {
  const I = [], n = values.length;
  for (let i = 0; i < n; ++i) {
    if (test(values[i], i, values)) {
      I.push(i);
    }
  }
  return I;
}
