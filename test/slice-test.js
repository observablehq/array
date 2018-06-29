import tape from "tape-await";
import slice from "../src/slice.js";

tape("slice()(values) returns the expected values", test => {
  test.deepEqual(slice()([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [5, 4, 3, 8, 6, 2, 7, 0, 1, 9]);
  test.equal(slice()(Int16Array.of(5, 4, 3, 8, 6, 2, 7, 0, 1, 9)).constructor, Int16Array);
});

tape("slice(i)(values) returns the expected values", test => {
  test.deepEqual(slice(5)([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [2, 7, 0, 1, 9]);
  test.deepEqual(slice(-5)([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [2, 7, 0, 1, 9]);
});

tape("slice(i, j)(values) returns the expected values", test => {
  test.deepEqual(slice(2, 8)([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [3, 8, 6, 2, 7, 0]);
  test.deepEqual(slice(2, -2)([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [3, 8, 6, 2, 7, 0]);
});
