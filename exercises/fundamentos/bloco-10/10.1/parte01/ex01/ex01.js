const sum = (a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return a + b;
  }
  throw new Error('parameters must be numbers');
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

module.exports = {sum, myRemove};
