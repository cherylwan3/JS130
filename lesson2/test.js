function foo(initialValue) {
  let total = initialValue;
  return function (adjustmentValue) {
    total += adjustmentValue;
    return total;
  };
}

let bar = foo(10);
let result = bar(-2); // r = 8
result += bar(5); // r = 13, total = 21
result += bar(3); // total = 16, r = 37
result += bar(-4); // total = 12, r = 49
console.log(result);