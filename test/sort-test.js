import tape from "tape-await";
import descending from "../src/descending.js";
import sort from "../src/sort.js";

tape("sort(values) returns the expected value", test => {
  test.deepEqual(sort([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [7, 8, 5, 2, 1, 0, 4, 6, 3, 9]);
});

tape("sort(values) does not mutate the input array", test => {
  const array = [5, 4, 3, 8, 6, 2, 7, 0, 1, 9];
  sort(array);
  test.deepEqual(array, [5, 4, 3, 8, 6, 2, 7, 0, 1, 9]);
});

tape("sort(values, order) returns the expected value", test => {
  test.deepEqual(sort([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], descending), [9, 3, 6, 4, 0, 1, 2, 5, 8, 7]);
});
