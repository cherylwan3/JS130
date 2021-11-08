const makeCounterLogger = start => {
  return (end) => {
    if (start > end) {
      for (let num = start; num >= end; num -= 1) {
        console.log(num);
      }
    } else if (start < end) {
      for (let num = start; num <= end; num += 1) {
        console.log(num);
      }
    } else {
      console.log(end);
    }
  };
};

let countlog = makeCounterLogger(5);
// countlog(8);
// 5
// 6
// 7
// 8

countlog(2);
// 5
// 4
// 3
// 2