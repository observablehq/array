import tape from "tape-await";
import sum from "../src/sum.js";
import group from "../src/group.js";

tape("group(keys) returns the expected value", test => {
  test.deepEqual([...group([0, 1, 2, 3, 3, 3, 2, 4])], [
    [0, [0]],
    [1, [1]],
    [2, [2, 6]],
    [3, [3, 4, 5]],
    [4, [7]]
  ]);
});

tape("group(keys, value) returns the expected value", test => {
  test.deepEqual([...group([0, 1, 2, 3, 3, 3, 2, 4], sum)], [
    [0, 0],
    [1, 1],
    [2, 8],
    [3, 12],
    [4, 7]
  ]);
});
