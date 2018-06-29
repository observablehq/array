import tape from "tape-await";
import ascending from "../src/ascending.js";

tape("ascending(a, b) returns the expected values", test => {
  test.equal(ascending(0, 0), 0);
  test.equal(ascending(1, 0), 1);
  test.equal(ascending(2, 0), 1);
  test.equal(ascending(0, 1), -1);
  test.equal(ascending(0, 2), -1);
  test.equal(isNaN(ascending(NaN, 0)), true);
});
