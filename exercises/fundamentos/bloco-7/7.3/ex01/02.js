const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}



// implemente seus testes aqui
assert.ok(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Array esperada deveria ser: [1, 2, 4]');
