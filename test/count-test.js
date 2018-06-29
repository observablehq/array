import tape from "tape-await";
import count from "../src/count.js";

tape("count(values) returns the expected values", test => {
  test.equal(count([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 10);
  test.equal(count([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9]), 8);
  test.equal(count([5, 4, 3, 8,, 2,, 0, 1, 9]), 8);
});
