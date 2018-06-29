import tape from "tape-await";
import ascending from "../src/ascending.js";
import range from "../src/range.js";
import shufflei from "../src/shufflei.js";

tape("shufflei(index) returns the expected value", test => {
  test.deepEqual(shufflei(range(5, 10)).sort(ascending), [5, 6, 7, 8, 9]);
});
