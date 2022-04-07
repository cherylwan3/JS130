function happy(first, mid1, mid2, mid3, last) {
  return {
    first,
    last,
    middle: [mid1, mid2, mid3],
  };
}

let args = [1, 2, 3, 4, 5];

let { first, middle, last } = happy(...args);

console.log(middle);