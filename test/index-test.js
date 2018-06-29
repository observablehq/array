import tape from "tape-await";
import * as array from "../src/index.js";

tape("@observablehq/array exports the expected symbols", test => {
  test.deepEqual(Object.keys(array), [
    "ascending",
    "bottom",
    "bottomi",
    "bottoms",
    "bottomsi",
    "count",
    "counti",
    "descending",
    "filter",
    "filteri",
    "get",
    "group",
    "max",
    "maxi",
    "mean",
    "meani",
    "median",
    "mediani",
    "min",
    "mini",
    "quantile",
    "quantilei",
    "range",
    "reverse",
    "shuffle",
    "shufflei",
    "slice",
    "sort",
    "sorti",
    "sum",
    "sumi",
    "take",
    "taker",
    "top",
    "topi",
    "tops",
    "topsi"
  ]);
});
