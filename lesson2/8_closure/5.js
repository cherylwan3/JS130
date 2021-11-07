const makeMultipleLister = num => {
  return () => {
    for (let increment = num; num < 100; num += increment) {
      console.log(num);
    }
  };
};

let lister = makeMultipleLister(17);
lister();

