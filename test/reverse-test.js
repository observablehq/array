import tape from "tape-await";
import reverse from "../src/reverse.js";

tape("reverse(values) returns the expected values", test => {
  test.deepEqual(reverse([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [9, 1, 0, 7, 2, 6, 8, 3, 4, 5]);
  test.equal(reverse(Int16Array.of(5, 4, 3, 8, 6, 2, 7, 0, 1, 9)).constructor, Int16Array);
});
