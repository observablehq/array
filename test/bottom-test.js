import tape from "tape-await";
import bottom from "../src/bottom.js";
import descending from "../src/descending.js";

tape("bottom(values) returns the expected values", test => {
  test.deepEqual(bottom([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [7]);
});

tape("bottom(values, k) returns the expected values", test => {
  test.deepEqual(bottom([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 3), [7, 8, 5]);
});

tape("bottom(values, k, order) returns the expected values", test => {
  test.deepEqual(bottom([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 3, descending), [9, 3, 6]);
});
