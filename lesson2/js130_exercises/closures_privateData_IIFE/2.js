const myBind = (func, ctx, ...args) => { // uses rest parameter
  let partialArgs = args;

  return (...restArgs) => {
    let remainingArgs = restArgs;
    let fullArgs = partialArgs.concat(remainingArgs);

    return func.apply(ctx, fullArgs);
  };
};

function addNumbers(a, b) {
  return a + b;
}

let addFive = myBind(addNumbers, null, 5);

console.log(addFive(10)); // 15