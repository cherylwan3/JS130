let total = 0;

const add = num => {
  total += num;
  console.log(total);
};

const subtract = num => {
  total -= num;
  console.log(total);
};


add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10