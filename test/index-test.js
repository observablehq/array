import tape from "tape-await";
import * as array from "../dist/array.es.js";

tape("@observablehq/array exports the expected symbols", test => {
	test.deepEqual(Object.keys(array), [
		"ascending",
		"bottom",
		"bottomi",
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
		"slice",
		"sort",
		"sorti",
		"sum",
		"sumi",
		"take",
		"taker",
		"top",
		"topi"
	]);
});
