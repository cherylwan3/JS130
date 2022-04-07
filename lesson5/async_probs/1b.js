function startCounting() {
  let num = 0;

  let counterId = setInterval(() => {
    num += 1;
    console.log(num);
  }, 1000);

  return counterId;
}

