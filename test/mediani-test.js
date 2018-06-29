import tape from "tape-await";
import mediani from "../src/mediani.js";

tape("mediani(values, index) returns the expected values", test => {
  test.equal(mediani([5, 4, 3, 8, 6, 2, 7, 0, 1, 9], [0, 2, 4, 6, 8]), 5);
  test.equal(mediani([5, 4, 3, 8, NaN, 2, NaN, 0, 1, 9], [0, 2, 4, 6, 8]), 3);
  test.equal(mediani([5, 4, 3, 8,, 2,, 0, 1, 9], [0, 2, 4, 6, 8]), 3);
});
