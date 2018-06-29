import tape from "tape-await";
import bottomi from "../src/bottomi.js";
import descending from "../src/descending.js";

tape("bottomi(values, index) returns the expected values", test => {
  test.deepEqual(bottomi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3]), [7, 5, 0, 6, 3]);
});

tape("bottomi(values, index, k) returns the expected values", test => {
  test.deepEqual(bottomi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3], 3), [7, 5, 0]);
});

tape("bottomi(values, index, k, order) returns the expected values", test => {
  test.deepEqual(bottomi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [5, 7, 6, 0, 3], 3, descending), [3, 6, 0]);
});
