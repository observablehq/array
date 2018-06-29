import tape from "tape-await";
import tops from "../src/tops.js";
import descending from "../src/descending.js";

tape("tops(values) returns the expected values", test => {
  test.deepEqual(tops([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [9, 3, 6, 4, 0]);
});

tape("tops(values, k) returns the expected values", test => {
  test.deepEqual(tops([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 3), [9, 3, 6]);
});

tape("tops(values, k, order) returns the expected values", test => {
  test.deepEqual(tops([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 3, descending), [7, 8, 5]);
});
