import tape from "tape-await";
import filter from "../src/filter.js";

tape("filter(values, test) returns the expected value", test => {
  test.deepEqual(filter([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], x => x & 1), [0, 2, 6, 8, 9]);
  test.deepEqual(filter([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], x => x > 5), [3, 4, 6, 9]);
});
