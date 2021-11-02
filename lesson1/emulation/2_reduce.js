function filter1(arr, callback, thisArg) {
  let returnArr = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (callback.call(thisArg, arr[idx]) === true) {
      returnArr.push(arr[idx]);
    }
  }

  return returnArr;
}

function filter(arr, callback) {
  return arr.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value);
    }
    return filteredItems;
  }, []);
}

// test code
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]
