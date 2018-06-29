import identity from "./identity.js";

export default function groupi(values, index, key = identity, value) {
  const map = new Map;
  if (value === undefined) {
    for (let i = 0, n = index.length; i < n; ++i) {
      let j = index[i], v = values[j], k = key(v, j, values), g = map.get(k);
      if (g === undefined) map.set(k, [v]);
      else g.push(v);
    }
  } else {
    for (let i = 0, n = index.length; i < n; ++i) {
      let j = index[i], k = key(values[j], j, values), g = map.get(k);
      if (g === undefined) map.set(k, [j]);
      else g.push(j);
    }
    for (const [k, g] of map) {
      map.set(k, value(g));
    }
  }
  return map;
}
