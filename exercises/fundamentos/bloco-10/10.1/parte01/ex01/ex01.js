const sum = (a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  }
  throw new Error('parameters must be numbers');
};
module.exports = {sum};
