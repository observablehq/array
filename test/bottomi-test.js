import tape from "tape-await";
import bottomi from "../src/bottomi.js";
import descending from "../src/descending.js";

tape("bottomi(values, index) returns the expected values", test => {
  test.equal(bottomi([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8]), 8);
  test.equal(bottomi([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8]), 8);
  test.equal(bottomi([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8]), 8);
});

tape("bottomi(values, index, order) returns the expected values", test => {
  test.equal(bottomi([5, 4, 3, 9, 6, 2, 7, 0, 1, 8], [0, 2, 4, 6, 8], descending), 6);
  test.equal(bottomi([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [0, 2, 4, 6, 8], descending), 0);
  test.equal(bottomi([5, 4, 3, 9,, 2,, 0, 1, 8], [0, 2, 4, 6, 8], descending), 0);
});

tape("bottomi(values, index) ignores leading NaN", test => {
  test.equal(bottomi([5, 4, 3, 9, NaN, 2, NaN, -1, 1, 8], [4, 6]), -1);
});
