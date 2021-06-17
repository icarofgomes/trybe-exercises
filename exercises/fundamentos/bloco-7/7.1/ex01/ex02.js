const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = array => {
  for (let index = array.length; index >=0; index -= 1) {
    for (let i = array.length; i >= 0; i -= 1) {
        if (array[i] < array[i-1]) {
          let keep = array[i-1]
          array.splice(i-1, 1);
          array.push(keep);
        }
    }
  }
  return array;
}

console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados em ordem crescente.`);
