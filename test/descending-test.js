import tape from "tape-await";
import descending from "../src/descending.js";

tape("descending(a, b) returns the expected values", test => {
  test.equal(descending(0, 0), 0);
  test.equal(descending(1, 0), -1);
  test.equal(descending(2, 0), -1);
  test.equal(descending(0, 1), 1);
  test.equal(descending(0, 2), 1);
  test.equal(isNaN(descending(NaN, 0)), true);
});
