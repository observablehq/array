import tape from "tape-await";
import counti from "../src/counti.js";

tape("counti(values, index) returns the expected values", test => {
  test.equal(counti([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [2, 3, 4, 5, 6, 7, 8, 9]), 8);
  test.equal(counti([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9], [2, 3, 4, 5, 6, 7, 8, 9]), 6);
  test.equal(counti([5, 4, 3, 8,, 2,, 0, 1, 9], [2, 3, 4, 5, 6, 7, 8, 9]), 6);
});
