import tape from "tape-await";
import sum from "../src/sum.js";

tape("sum(values) returns the expected values", test => {
  test.equal(sum([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 45);
  test.equal(sum([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9]), 32);
  test.equal(sum([5, 4, 3, 8,, 2,, 0, 1, 9]), 32);
});
