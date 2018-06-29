export default function range(start, stop, step) {
  const n = arguments.length;
  start = +start, stop = +stop, step = n < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  return Uint32Array.from({length: Math.ceil((stop - start) / step)}, (_, i) => start + i * step);
}
