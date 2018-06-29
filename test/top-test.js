import tape from "tape-await";
import top from "../src/top.js";
import descending from "../src/descending.js";

tape("top(values) returns the expected values", test => {
  test.deepEqual(top([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [9]);
});

tape("top(values, k) returns the expected values", test => {
  test.deepEqual(top([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 3), [9, 3, 6]);
});

tape("top(values, k, order) returns the expected values", test => {
  test.deepEqual(top([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 3, descending), [7, 8, 5]);
});
