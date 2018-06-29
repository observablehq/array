import tape from "tape-await";
import range from "../src/range.js";

tape("range(stop) returns the expected values", test => {
  test.deepEqual(range(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

tape("range(start, stop) returns the expected values", test => {
  test.deepEqual(range(5, 10), [5, 6, 7, 8, 9]);
});

tape("range(start, stop, step) returns the expected values", test => {
  test.deepEqual(range(5, 10, 2), [5, 7, 9]);
});
