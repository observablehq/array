export default function group(keys, value) {
  const map = new Map;
  for (let i = 0, n = keys.length; i < n; ++i) {
    let k = keys[i], v = map.get(k);
    if (v === undefined) map.set(k, [i]);
    else v.push(i);
  }
  if (value !== undefined) {
    for (const [key, index] of map) {
      map.set(key, value(index));
    }
  }
  return map;
}
