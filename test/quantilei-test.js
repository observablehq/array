import tape from "tape-await";
import quantilei from "../src/quantilei.js";

tape("quantilei(values, index, p) returns the expected values", test => {
  test.equal(quantilei([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [0, 2, 4, 6, 8], 0.5), 5);
  test.equal(quantilei([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9], [0, 2, 4, 6, 8], 0.5), 3);
  test.equal(quantilei([5, 4, 3, 8,, 2,, 0, 1, 9], [0, 2, 4, 6, 8], 0.5), 3);
  test.equal(quantilei([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [0, 2, 4, 6, 8], 0.25), 3);
  test.equal(quantilei([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9], [0, 2, 4, 6, 8], 0.25), 2);
  test.equal(quantilei([5, 4, 3, 8,, 2,, 0, 1, 9], [0, 2, 4, 6, 8], 0.25), 2);
});
