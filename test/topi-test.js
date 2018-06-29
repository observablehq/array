import tape from "tape-await";
import topi from "../src/topi.js";
import descending from "../src/descending.js";

tape("topi(values, index) returns the expected values", test => {
  test.equal(topi([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8]), 6);
  test.equal(topi([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8]), 0);
  test.equal(topi([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8]), 0);
});

tape("topi(values, index, order) returns the expected values", test => {
  test.equal(topi([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8], descending), 8);
  test.equal(topi([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8], descending), 8);
  test.equal(topi([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8], descending), 8);
});

tape("topi(values, index) ignores leading NaN", test => {
  test.equal(topi([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [4, 6]), -1);
});
