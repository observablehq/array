export default function shufflei(index) {
  let m = index.length, t, i;
  const I = index.slice();
  while (m) {
    i = Math.random() * m-- | 0;
    t = I[m], I[m] = I[i], I[i] = t;
  }
  return I;
}
