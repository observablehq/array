export default function taker(index) {
  return values => values.constructor.from(index, i => values[i]);
}
