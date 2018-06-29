import tape from "tape-await";
import top1 from "../src/top1.js";
import descending from "../src/descending.js";

tape("top1(values) returns the expected values", test => {
  test.equal(top1([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 9);
  test.equal(top1([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9]), 9);
  test.equal(top1([5, 4, 3, 8,, 2,, 0, 1, 9]), 9);
});

tape("top1(values, order) returns the expected values", test => {
  test.equal(top1([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], descending), 7);
  test.equal(top1([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9], descending), 7);
  test.equal(top1([5, 4, 3, 8,, 2,, 0, 1, 9], descending), 7);
});

tape("top1(values) ignores leading NaN", test => {
  test.equal(top1([NaN, NaN, 5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 11);
  test.equal(top1([NaN, NaN, NaN]), -1);
});
