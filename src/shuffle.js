import range from "./range.js";

export default function shuffle(length) {
  let m = +length, t, i;
  const I = range(m);
  while (m) {
    i = Math.random() * m-- | 0;
    t = I[m], I[m] = I[i], I[i] = t;
  }
  return I;
}
