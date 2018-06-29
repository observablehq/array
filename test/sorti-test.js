import tape from "tape-await";
import descending from "../src/descending.js";
import sorti from "../src/sorti.js";

tape("sorti(values, index) returns the expected value", test => {
  test.deepEqual(sorti([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [0, 2, 4, 6, 8]), [8, 2, 0, 4, 6]);
});

tape("sorti(values, index, order) returns the expected value", test => {
  test.deepEqual(sorti([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [0, 2, 4, 6, 8], descending), [6, 4, 0, 2, 8]);
});
