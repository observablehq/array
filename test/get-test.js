import tape from "tape-await";
import get from "../src/get.js";

tape("get(i)(values) returns the expected value", test => {
  test.equal(get(5)([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), 2);
});
