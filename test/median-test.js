import tape from "tape-await";
import median from "../src/median.js";

tape("median(values) returns the expected values", test => {
  test.equal(median([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 4.5);
  test.equal(median([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9]), 3.5);
  test.equal(median([5, 4, 3, 8,, 2,, 0, 1, 9]), 3.5);
});
