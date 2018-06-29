import tape from "tape-await";
import bottom1i from "../src/bottom1i.js";
import descending from "../src/descending.js";

tape("bottom1i(values, index) returns the expected values", test => {
  test.equal(bottom1i([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8]), 8);
  test.equal(bottom1i([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8]), 8);
  test.equal(bottom1i([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8]), 8);
});

tape("bottom1i(values, index, order) returns the expected values", test => {
  test.equal(bottom1i([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8], descending), 6);
  test.equal(bottom1i([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8], descending), 0);
  test.equal(bottom1i([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8], descending), 0);
});

tape("bottom1i(values, index) ignores leading NaN", test => {
  test.equal(bottom1i([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [4, 6]), -1);
});
