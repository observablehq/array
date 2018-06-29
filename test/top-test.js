import tape from "tape-await";
import top from "../src/top.js";
import descending from "../src/descending.js";

tape("top(values) returns the expected values", test => {
  test.equal(top([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 9);
  test.equal(top([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9]), 9);
  test.equal(top([5, 4, 3, 8,, 2,, 0, 1, 9]), 9);
});

tape("top(values, order) returns the expected values", test => {
  test.equal(top([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], descending), 7);
  test.equal(top([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9], descending), 7);
  test.equal(top([5, 4, 3, 8,, 2,, 0, 1, 9], descending), 7);
});

tape("top(values) ignores leading NaN", test => {
  test.equal(top([NaN, NaN, 5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 11);
  test.equal(top([NaN, NaN, NaN]), -1);
});
