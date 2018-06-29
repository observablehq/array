import tape from "tape-await";
import bottom from "../src/bottom.js";
import descending from "../src/descending.js";

tape("bottom(values) returns the expected values", test => {
  test.equal(bottom([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 7);
  test.equal(bottom([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9]), 7);
  test.equal(bottom([5, 4, 3, 8,, 2,, 0, 1, 9]), 7);
});

tape("bottom(values, order) returns the expected values", test => {
  test.equal(bottom([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], descending), 9);
  test.equal(bottom([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9], descending), 9);
  test.equal(bottom([5, 4, 3, 8,, 2,, 0, 1, 9], descending), 9);
});

tape("bottom(values) ignores leading NaN", test => {
  test.equal(bottom([NaN, NaN, 5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 9);
  test.equal(bottom([NaN, NaN, NaN]), -1);
});
