export default function filteri(values, index, test) {
  const I = [], n = index.length;
  for (let i = 0; i < n; ++i) {
    const j = index[i];
    if (test(values[j], j, values)) {
      I.push(j);
    }
  }
  return I;
}
