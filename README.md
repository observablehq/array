# @observablehq/array

https://beta.observablehq.com/@mbostock/manipulating-flat-arrays

## API Reference

<a href="#ascending" name="ascending">#</a> <b>ascending</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/observablehq/array/blob/master/src/ascending.js "Source")

Returns -1 if *a* is less than *b*, 1 if *a* is greater than *b*, 0 if *a* is equal to *b*, or NaN. Useful as the *order* argument with [sort](#sort), [top](#top) and [bottom](#bottom).

<a href="#bottom" name="bottom">#</a> <b>bottom</b>(<i>values</i>, <i>k</i> = 1, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/bottom.js "Source")

…

<a href="#bottomi" name="bottomi">#</a> <b>bottomi</b>(<i>values</i>, <i>index</i>, <i>k</i> = 1, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/bottomi.js "Source")

…

<a href="#count" name="count">#</a> <b>count</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/count.js "Source")

Returns the number of numeric (not NaN) values in the specified *values* array.

```js
count([1, "N/A", 2, NaN, 3]) // 3
```

<a href="#counti" name="counti">#</a> <b>counti</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/counti.js "Source")

Returns the number of numeric (not NaN) values in the subset of the *values* array specified by the *index* array.

```js
counti([1, "N/A", 2, NaN, 3], [0, 1, 2]) // 2
```

Equivalent to [count](#count)([take](#take)(*values*, *index*)).

<a href="#descending" name="descending">#</a> <b>descending</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/observablehq/array/blob/master/src/descending.js "Source")

Returns -1 if *b* is less than *a*, 1 if *b* is greater than *a*, 0 if *b* is equal to *a*, or NaN. Useful as the *order* argument with [sort](#sort), [top](#top) and [bottom](#bottom).

<a href="#filter" name="filter">#</a> <b>filter</b>(<i>values</i>, <i>test</i>) [<>](https://github.com/observablehq/array/blob/master/src/filter.js "Source")

…

<a href="#filteri" name="filteri">#</a> <b>filteri</b>(<i>values</i>, <i>index</i>, <i>test</i>) [<>](https://github.com/observablehq/array/blob/master/src/filteri.js "Source")

…

<a href="#get" name="get">#</a> <b>get</b>(<i>i</i>) [<>](https://github.com/observablehq/array/blob/master/src/get.js "Source")

…

<a href="#group" name="group">#</a> <b>group</b>(<i>keys</i>[, <i>value</i>]) [<>](https://github.com/observablehq/array/blob/master/src/group.js "Source")

…

<a href="#max" name="max">#</a> <b>max</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/max.js "Source")

…

<a href="#maxi" name="maxi">#</a> <b>maxi</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/maxi.js "Source")

…

<a href="#mean" name="mean">#</a> <b>mean</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/mean.js "Source")

…

<a href="#meani" name="meani">#</a> <b>meani</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/meani.js "Source")

…

<a href="#median" name="median">#</a> <b>median</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/median.js "Source")

…

<a href="#mediani" name="mediani">#</a> <b>mediani</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/mediani.js "Source")

…

<a href="#min" name="min">#</a> <b>min</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/min.js "Source")

…

<a href="#mini" name="mini">#</a> <b>mini</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/mini.js "Source")

…

<a href="#quantile" name="quantile">#</a> <b>quantile</b>(<i>values</i>, <i>p</i>) [<>](https://github.com/observablehq/array/blob/master/src/quantile.js "Source")

…

<a href="#quantilei" name="quantilei">#</a> <b>quantilei</b>(<i>values</i>, <i>index</i>, <i>p</i>) [<>](https://github.com/observablehq/array/blob/master/src/quantilei.js "Source")

…

<a href="#range" name="range">#</a> <b>range</b>(<i>start</i>[, <i>stop</i>[, <i>step</i>]]) [<>](https://github.com/observablehq/array/blob/master/src/range.js "Source")

…

<a href="#reverse" name="reverse">#</a> <b>reverse</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/reverse.js "Source")

…

<a href="#shuffle" name="shuffle">#</a> <b>shuffle</b>(<i>length</i>) [<>](https://github.com/observablehq/array/blob/master/src/shuffle.js "Source")

…

<a href="#shufflei" name="shufflei">#</a> <b>shufflei</b>(<i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/shufflei.js "Source")

…

<a href="#slice" name="slice">#</a> <b>slice</b>([<i>start</i>[, <i>stop</i>]]) [<>](https://github.com/observablehq/array/blob/master/src/slice.js "Source")

…

<a href="#sort" name="sort">#</a> <b>sort</b>(<i>values</i>, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/sort.js "Source")

…

<a href="#sorti" name="sorti">#</a> <b>sorti</b>(<i>values</i>, <i>index</i>, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/sorti.js "Source")

…

<a href="#sum" name="sum">#</a> <b>sum</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/sum.js "Source")

…

<a href="#sumi" name="sumi">#</a> <b>sumi</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/sumi.js "Source")

…

<a href="#take" name="take">#</a> <b>take</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/take.js "Source")

…

<a href="#taker" name="taker">#</a> <b>taker</b>(<i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/taker.js "Source")

…

<a href="#top" name="top">#</a> <b>top</b>(<i>values</i>, <i>k</i> = 1, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/top.js "Source")

…

<a href="#topi" name="topi">#</a> <b>topi</b>(<i>values</i>, <i>index</i>, <i>k</i> = 1, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/topi.js "Source")

…

