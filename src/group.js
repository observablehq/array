import identity from "./identity.js";

export default function group(values, key = identity, value) {
  const map = new Map;
  if (value === undefined) {
    for (let i = 0, n = values.length; i < n; ++i) {
      let v = values[i], k = key(v, i, values), g = map.get(k);
      if (g === undefined) map.set(k, [v]);
      else g.push(v);
    }
  } else {
    for (let i = 0, n = values.length; i < n; ++i) {
      let k = key(values[i], i, values), g = map.get(k);
      if (g === undefined) map.set(k, [i]);
      else g.push(i);
    }
    for (const [k, g] of map) {
      map.set(k, value(g));
    }
  }
  return map;
}
