import tape from "tape-await";
import bottomsi from "../src/bottomsi.js";
import descending from "../src/descending.js";

tape("bottomsi(values, index) returns the expected values", test => {
  test.deepEqual(bottomsi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3]), [7, 5, 0, 6, 3]);
});

tape("bottomsi(values, index, k) returns the expected values", test => {
  test.deepEqual(bottomsi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3], 3), [7, 5, 0]);
});

tape("bottomsi(values, index, k, order) returns the expected values", test => {
  test.deepEqual(bottomsi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3], 3, descending), [3, 6, 0]);
});
