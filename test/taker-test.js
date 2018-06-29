import tape from "tape-await";
import taker from "../src/taker.js";

tape("taker(index)(values) returns the expected value", test => {
  test.deepEqual(taker([0, 2, 4, 6, 8])([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [5, 3, 6, 7, 1]);
  test.deepEqual(taker([8, 6, 4, 2, 0])([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [1, 7, 6, 3, 5]);
  test.deepEqual(taker([8, 0, 0, 8])([5, 4, 3, 8, 6, 2, 7, 0, 1, 9]), [1, 5, 5, 1]);
  test.equal(taker([0, 1, 2])(Int16Array.of(5, 4, 3, 8, 6, 2, 7, 0, 1, 9)).constructor, Int16Array);
});
