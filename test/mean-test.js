import tape from "tape-await";
import mean from "../src/mean.js";

tape("mean(values) returns the expected values", test => {
  test.equal(mean([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 4.5);
  test.equal(mean([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9]), 4);
  test.equal(mean([5, 4, 3, 8,, 2,, 0, 1, 9]), 4);
});
