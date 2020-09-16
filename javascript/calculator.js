const calculator = (() => {
  const add = (x, y) => x + y;
  const sub = (x, y) => x - y;
  const mult = (x, y) => x * y;
  const div = (x, y) => {
    if (y > 0) {
      return x / y;
    }
    return NaN;
  };

  return {
    add,
    sub,
    mult,
    div,
  };
})();

export default calculator;