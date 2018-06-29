import tape from "tape-await";
import bottoms from "../src/bottoms.js";
import descending from "../src/descending.js";

tape("bottoms(values) returns the expected values", test => {
  test.deepEqual(bottoms([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [7, 8, 5, 2, 1]);
});

tape("bottoms(values, k) returns the expected values", test => {
  test.deepEqual(bottoms([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 3), [7, 8, 5]);
});

tape("bottoms(values, k, order) returns the expected values", test => {
  test.deepEqual(bottoms([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 3, descending), [9, 3, 6]);
});
