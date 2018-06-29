import tape from "tape-await";
import topi from "../src/topi.js";
import descending from "../src/descending.js";

tape("topi(values, index) returns the expected values", test => {
  test.deepEqual(topi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3]), [3, 6, 0, 5, 7]);
});

tape("topi(values, index, k) returns the expected values", test => {
  test.deepEqual(topi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3], 3), [3, 6, 0]);
});

tape("topi(values, index, k, order) returns the expected values", test => {
  test.deepEqual(topi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3], 3, descending), [7, 5, 0]);
});
