import tape from "tape-await";
import take from "../src/take.js";

tape("take(values, index) returns the expected value", test => {
  test.deepEqual(take([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [0, 2, 4, 6, 8]), [5, 3, 6, 7, 1]);
  test.deepEqual(take([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [8, 6, 4, 2, 0]), [1, 7, 6, 3, 5]);
  test.deepEqual(take([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [8, 0, 0, 8]), [1, 5, 5, 1]);
  test.equal(take(Int16Array.of(5, 4, 3, 8, 6, 2, 7, 0, 1, 9), [0, 1, 2]).constructor, Int16Array);
});
