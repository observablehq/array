import tape from "tape-await";
import bottom1 from "../src/bottom1.js";
import descending from "../src/descending.js";

tape("bottom1(values) returns the expected values", test => {
  test.equal(bottom1([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 7);
  test.equal(bottom1([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9]), 7);
  test.equal(bottom1([5, 4, 3, 8,, 2,, 0, 1, 9]), 7);
});

tape("bottom1(values, order) returns the expected values", test => {
  test.equal(bottom1([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], descending), 9);
  test.equal(bottom1([5, 4, 3, 8, NaN, 2, NaN, -1, 1, 9], descending), 9);
  test.equal(bottom1([5, 4, 3, 8,, 2,, 0, 1, 9], descending), 9);
});

tape("bottom1(values) ignores leading NaN", test => {
  test.equal(bottom1([NaN, NaN, 5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 9);
  test.equal(bottom1([NaN, NaN, NaN]), -1);
});
