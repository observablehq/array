import tape from "tape-await";
import group from "../src/group.js";
import identity from "../src/identity.js";
import sum from "../src/sum.js";

tape("group(values) returns the expected value", test => {
  test.deepEqual([...group([0, 1, 2, 3, 3, 3, 2, 4])], [
    [0, [0]],
    [1, [1]],
    [2, [2, 2]],
    [3, [3, 3, 3]],
    [4, [4]]
  ]);
});

tape("group(values, key) returns the expected value", test => {
  test.deepEqual([...group([0, 1, 2, 3, 3, 3, 2, 4], identity)], [
    [0, [0]],
    [1, [1]],
    [2, [2, 2]],
    [3, [3, 3, 3]],
    [4, [4]]
  ]);
});

tape("group(values, key, value) returns the expected value", test => {
  test.deepEqual([...group([0, 1, 2, 3, 3, 3, 2, 4], identity, identity)], [
    [0, [0]],
    [1, [1]],
    [2, [2, 6]],
    [3, [3, 4, 5]],
    [4, [7]]
  ]);
  test.deepEqual([...group([0, 1, 2, 3, 3, 3, 2, 4], identity, sum)], [
    [0, 0],
    [1, 1],
    [2, 8],
    [3, 12],
    [4, 7]
  ]);
});
