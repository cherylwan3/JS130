function map(array, callback) {
  return array.reduce((accumArr, currentVal) => {
    accumArr.push(callback(currentVal));
    return accumArr;
  }, []);
}

// test code
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


// the value of foo is 1
// the value of bar is 2
// the value of qux is 3