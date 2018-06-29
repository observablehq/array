import tape from "tape-await";
import top1i from "../src/top1i.js";
import descending from "../src/descending.js";

tape("top1i(values, index) returns the expected values", test => {
  test.equal(top1i([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8]), 6);
  test.equal(top1i([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8]), 0);
  test.equal(top1i([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8]), 0);
});

tape("top1i(values, index, order) returns the expected values", test => {
  test.equal(top1i([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8], descending), 8);
  test.equal(top1i([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8], descending), 8);
  test.equal(top1i([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8], descending), 8);
});

tape("top1i(values, index) ignores leading NaN", test => {
  test.equal(top1i([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [4, 6]), -1);
});
