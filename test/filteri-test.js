import tape from "tape-await";
import filteri from "../src/filteri.js";

tape("filteri(values, index, test) returns the expected value", test => {
  test.deepEqual(filteri([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [0, 2, 4, 6, 8], x => x & 1), [0, 2, 6, 8]);
  test.deepEqual(filteri([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [0, 2, 4, 6, 8], x => x > 5), [4, 6]);
});
