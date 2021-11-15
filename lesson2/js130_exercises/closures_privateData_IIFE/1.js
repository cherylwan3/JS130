function myBind(context, func) {
  return (...args) => {
    return func.apply(context, args);
  };
}