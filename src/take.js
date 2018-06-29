export default function take(values, index) {
  return values.constructor.from(index, i => values[i]);
}
