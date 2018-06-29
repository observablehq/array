import tape from "tape-await";
import sumi from "../src/sumi.js";

tape("sumi(values, index) returns the expected values", test => {
  test.equal(sumi([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [2, 3, 4, 5, 6, 7, 8, 9]), 36);
  test.equal(sumi([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9], [2, 3, 4, 5, 6, 7, 8, 9]), 23);
  test.equal(sumi([5, 4, 3, 8,, 2,, 0, 1, 9], [2, 3, 4, 5, 6, 7, 8, 9]), 23);
});
