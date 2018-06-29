import tape from "tape-await";
import ascending from "../src/ascending.js";
import shuffle from "../src/shuffle.js";

tape("shuffle(length) returns the expected value", test => {
  test.deepEqual(shuffle(10).sort(ascending), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
