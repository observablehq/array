# @observablehq/array

https://beta.observablehq.com/@mbostock/manipulating-flat-arrays

## API Reference

### Summarizing

<a href="#count" name="count">#</a> <b>count</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/count.js "Source")

Returns the number of numeric values in the specified *values* array.

```js
count([1, "N/A", 2, NaN, 3]) // 3
```

<a href="#counti" name="counti">#</a> <b>counti</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/counti.js "Source")

Returns the number of numeric values in the subset of the specified *values* array in the specified *index* array. Equivalent to [count](#count)([take](#take)(*values*, *index*)).

```js
counti([1, "N/A", 2, NaN, 3], [0, 1, 2]) // 2
```

<a href="#max" name="max">#</a> <b>max</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/max.js "Source")

Returns the maximum numeric value in the specified *values* array. For the corresponding index, see [top](#top).

```js
max([1, "N/A", 2, NaN, 4.5]) // 4.5
```

<a href="#maxi" name="maxi">#</a> <b>maxi</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/maxi.js "Source")

Returns the maximum numeric value in the subset of the specified *values* array in the specified *index* array. For the corresponding index, see [topi](#topi).

```js
maxi([1, "N/A", 2.5, NaN, 4], [0, 1, 2]) // 2
```

<a href="#min" name="min">#</a> <b>min</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/min.js "Source")

Returns the minimum numeric value in the specified *values* array. For the corresponding index, see [bottom](#bottom).

```js
min([1, "N/A", 2, NaN, 4.5]) // 1
```

<a href="#mini" name="mini">#</a> <b>mini</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/mini.js "Source")

Returns the minimum numeric value in the subset of the specified *values* array in the specified *index* array. For the corresponding index, see [bottomi](#bottomi).

```js
mini([1.5, "N/A", 2, NaN, 4], [0, 1, 2]) // 1.5
```

<a href="#mean" name="mean">#</a> <b>mean</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/mean.js "Source")

Returns the arithmetic mean of the specified *values* array.

```js
mean([0, 1, 4, 8, NaN, 2]) // 3
```

<a href="#meani" name="meani">#</a> <b>meani</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/meani.js "Source")

Returns the arithmetic mean of the subset of the specified *values* array in the specified *index* array. Equivalent to [mean](#mean)([take](#take)(*values*, *index*)).

```js
meani([NaN, 1, 3, 8, 3], [0, 1, 2, 3]) // 4
```

<a href="#median" name="median">#</a> <b>median</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/median.js "Source")

Returns the median of the specified *values* array. Equivalent to [quantile](#quantile)(*values*, 0.5).

```js
median([0, 1, 4, 8, NaN, 2]) // 2
```

<a href="#mediani" name="mediani">#</a> <b>mediani</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/mediani.js "Source")

Returns the median of the subset of the specified *values* array in the specified *index* array. Equivalent to [quantile](#quantile)([take](#take)(*values*, *index*), 0.5).

```js
mediani([0, 1, 4, 8, NaN, 2], [0, 1, 2, 3]) // 2.5
```

<a href="#quantile" name="quantile">#</a> <b>quantile</b>(<i>values</i>, <i>p</i>) [<>](https://github.com/observablehq/array/blob/master/src/quantile.js "Source")

Returns the *p*-quantile of the specified *values* array with the specified *p* using the [R-7 method](https://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population).

```js
quantile([0, 1, 4, 8, NaN, 2], 0.5) // 2
```

<a href="#quantilei" name="quantilei">#</a> <b>quantilei</b>(<i>values</i>, <i>index</i>, <i>p</i>) [<>](https://github.com/observablehq/array/blob/master/src/quantilei.js "Source")

Returns the *p*-quantile of the subset of the specified *values* array in the specified *index* array with the specified *p* using the [R-7 method](https://en.wikipedia.org/wiki/Quantile#Quantiles_of_a_population). Equivalent to [quantile](#quantile)([take](#take)(*values*, *index*), *p*).

```js
quantilei([0, 1, 4, 8, NaN, 2], [0, 1, 2, 3], 0.5) // 2
```

<a href="#sum" name="sum">#</a> <b>sum</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/sum.js "Source")

Returns the sum of the specified *values* array.

```js
sum([0, 1, 4, 8, NaN, 2]) // 15
```

<a href="#sumi" name="sumi">#</a> <b>sumi</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/sumi.js "Source")

Returns the sum of the subset of the specified *values* array in the specified *index* array. Equivalent to [sum](#sum)([take](#take)(*values*, *index*)).

```js
sumi([0, 1, 4, 8, NaN, 2], [0, 1, 2, 3]) // 13
```

### Sorting

<a href="#bottom" name="bottom">#</a> <b>bottom</b>(<i>values</i>, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/bottom.js "Source")

Returns the index of the specified *values* array with the corresponding least value according to the specified *order* comparator.

```js
bottom(["f", "e", "d", "i", "g", "c", "h", "a", "b", "j"]) // 7
```

<a href="#bottomi" name="bottomi">#</a> <b>bottomi</b>(<i>values</i>, <i>index</i>, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/bottomi.js "Source")

Returns the index in the specified *index* array with the corresponding least value in the specified *values* array according to the specified *order* comparator. Equivalent to [bottom](#bottom)([take](#take)(*values*, *index*), *order*).

```js
bottomi(["f", "e", "d", "i", "g", "c", "h", "a", "b", "j"], [0, 2, 4, 6]) // 2
```

<a href="#bottoms" name="bottoms">#</a> <b>bottoms</b>(<i>values</i>, <i>k</i> = 5, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/bottoms.js "Source")

Returns an array of the *k* indexes of the specified *values* array with the corresponding least values according to the specified *order* comparator.

```js
bottoms(["f", "e", "d", "i", "g", "c", "h", "a", "b", "j"], 3) // [7, 8, 5]
```

<a href="#bottomsi" name="bottomsi">#</a> <b>bottomsi</b>(<i>values</i>, <i>index</i>, <i>k</i> = 5, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/bottomsi.js "Source")

Returns an array of the *k* indexes in the specified *index* array with the corresponding least values in the specified *values* array according to the specified *order* comparator. Equivalent to [bottoms](#bottoms)([take](#take)(*values*, *index*), *k*, *order*).

```js
bottomsi(["f", "e", "d", "i", "g", "c", "h", "a", "b", "j"], [0, 2, 4, 6], 2) // [2, 0]
```

<a href="#sort" name="sort">#</a> <b>sort</b>(<i>values</i>, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/sort.js "Source")

…

<a href="#sorti" name="sorti">#</a> <b>sorti</b>(<i>values</i>, <i>index</i>, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/sorti.js "Source")

…

<a href="#top" name="top">#</a> <b>top</b>(<i>values</i>, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/top.js "Source")

Returns the index of the specified *values* array with the corresponding greatest value according to the specified *order* comparator.

```js
top(["f", "e", "d", "i", "g", "c", "h", "a", "b", "j"]) // 9
```

<a href="#topi" name="topi">#</a> <b>topi</b>(<i>values</i>, <i>index</i>, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/topi.js "Source")

Returns the index in the specified *index* array with the corresponding greatest value in the specified *values* array according to the specified *order* comparator. Equivalent to [top](#top)([take](#take)(*values*, *index*), *order*).

```js
topi(["f", "e", "d", "i", "g", "c", "h", "a", "b", "j"], [0, 2, 4, 6]) // 6
```

<a href="#tops" name="tops">#</a> <b>tops</b>(<i>values</i>, <i>k</i> = 5, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/tops.js "Source")

Returns an array of the *k* indexes of the specified *values* array with the corresponding greatest values according to the specified *order* comparator.

```js
tops(["f", "e", "d", "i", "g", "c", "h", "a", "b", "j"], 3) // [9, 3, 6]
```

<a href="#topsi" name="topsi">#</a> <b>topsi</b>(<i>values</i>, <i>index</i>, <i>k</i> = 5, <i>order</i> = [ascending](#ascending)) [<>](https://github.com/observablehq/array/blob/master/src/topsi.js "Source")

Returns an array of the *k* indexes in the specified *index* array with the corresponding greatest values in the specified *values* array according to the specified *order* comparator. Equivalent to [top](#top)([take](#take)(*values*, *index*), *k*, *order*).

```js
topsi(["f", "e", "d", "i", "g", "c", "h", "a", "b", "j"], [0, 2, 4, 6], 2) // [6, 4]
```

### Arranging

<a href="#range" name="range">#</a> <b>range</b>(<i>start</i>[, <i>stop</i>[, <i>step</i>]]) [<>](https://github.com/observablehq/array/blob/master/src/range.js "Source")

…

<a href="#reverse" name="reverse">#</a> <b>reverse</b>(<i>values</i>) [<>](https://github.com/observablehq/array/blob/master/src/reverse.js "Source")

…

<a href="#shuffle" name="shuffle">#</a> <b>shuffle</b>(<i>length</i>) [<>](https://github.com/observablehq/array/blob/master/src/shuffle.js "Source")

…

<a href="#shufflei" name="shufflei">#</a> <b>shufflei</b>(<i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/shufflei.js "Source")

…

### Filtering

<a href="#take" name="take">#</a> <b>take</b>(<i>values</i>, <i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/take.js "Source")

…

<a href="#taker" name="taker">#</a> <b>taker</b>(<i>index</i>) [<>](https://github.com/observablehq/array/blob/master/src/taker.js "Source")

…

<a href="#get" name="get">#</a> <b>get</b>(<i>i</i>) [<>](https://github.com/observablehq/array/blob/master/src/get.js "Source")

…

<a href="#filter" name="filter">#</a> <b>filter</b>(<i>values</i>, <i>test</i>) [<>](https://github.com/observablehq/array/blob/master/src/filter.js "Source")

…

<a href="#filteri" name="filteri">#</a> <b>filteri</b>(<i>values</i>, <i>index</i>, <i>test</i>) [<>](https://github.com/observablehq/array/blob/master/src/filteri.js "Source")

…

<a href="#slice" name="slice">#</a> <b>slice</b>([<i>start</i>[, <i>stop</i>]]) [<>](https://github.com/observablehq/array/blob/master/src/slice.js "Source")

…

### Grouping

<a href="#group" name="group">#</a> <b>group</b>(<i>keys</i>[, <i>value</i>]) [<>](https://github.com/observablehq/array/blob/master/src/group.js "Source")

…

### Comparing

These functions are useful as the *order* argument to [sort](#sort), [top](#top) and [bottom](#bottom).

<a href="#ascending" name="ascending">#</a> <b>ascending</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/observablehq/array/blob/master/src/ascending.js "Source")

Returns -1 if *a* is less than *b*, 1 if *a* is greater than *b*, 0 if *a* is equal to *b*, or NaN.

<a href="#descending" name="descending">#</a> <b>descending</b>(<i>a</i>, <i>b</i>) [<>](https://github.com/observablehq/array/blob/master/src/descending.js "Source")

Returns -1 if *b* is less than *a*, 1 if *b* is greater than *a*, 0 if *b* is equal to *a*, or NaN.
