import tape from "tape-await";
import maxi from "../src/maxi.js";

tape("maxi(values, index) returns the expected values", test => {
  test.equal(maxi([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8]), 6);
  test.equal(maxi([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8]), 0);
  test.equal(maxi([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8]), 0);
});
