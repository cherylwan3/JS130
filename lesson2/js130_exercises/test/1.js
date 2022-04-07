const myBind = (func, context) => {
  return () => {
    func.apply(context, arguments);
  };
};