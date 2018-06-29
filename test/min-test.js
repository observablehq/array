import tape from "tape-await";
import min from "../src/min.js";

tape("min(values) returns the expected values", test => {
  test.equal(min([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 7);
  test.equal(min([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9]), 7);
  test.equal(min([5, 4, 3, 8,, 2,, 0, 1, 9]), 7);
});
