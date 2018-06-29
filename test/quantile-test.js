import tape from "tape-await";
import quantile from "../src/quantile.js";

tape("quantile(values, p) returns the expected values", test => {
  test.equal(quantile([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 0.5), 4.5);
  test.equal(quantile([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9], 0.5), 3.5);
  test.equal(quantile([5, 4, 3, 8,, 2,, 0, 1, 9], 0.5), 3.5);
  test.equal(quantile([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], 0.25), 2.25);
  test.equal(quantile([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9], 0.25), 1.75);
  test.equal(quantile([5, 4, 3, 8,, 2,, 0, 1, 9], 0.25), 1.75);
});
