import tape from "tape-await";
import groupi from "../src/groupi.js";

tape("groupi(values, index) returns the expected value", test => {
  test.deepEqual([...groupi([0, 1, 2, 3, 3, 3, 2, 4], [0, 1, 2, 3, 4])], [
    [0, [0]],
    [1, [1]],
    [2, [2]],
    [3, [3, 3]]
  ]);
});
