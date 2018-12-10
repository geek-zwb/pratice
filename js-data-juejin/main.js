let str = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE....`;

str = str.toLowerCase();

let strArr = str.match(/\w+/g);

_.reduceByKey = function(tuples, reduceCallback) {
  const grouped = _.groupBy(tuples, function(tuple) {
    return tuple[0];
  });
  return _.toPairs(_.mapValues(grouped, function(tuples) {
    return _.chain(tuples).
        map(tuple => tuple[1]).
        reduce(reduceCallback).
        value();
  }));
};

let test = _.reduceByKey(strArr.map(item => [item, 1]),
    (count, current) => count + current);

console.log('test', test);

test = test.sort((left, right) => right[1] - left[1]);

const test1 = [1, 2, 3, 2, 2, 3, 1, 4, 4, 1, 2, 1, 1, 3, 4];
let test1R = _.reduceByKey(test1.sort().map(item => [item, 1]),
    (count, current) => count + current);
console.log('test1R', test1R);