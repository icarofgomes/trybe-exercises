const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (array1, array2) => {
  let counter = 0;
  for (let i = 0; i < array1.length; i += 1) {
    if (array2[i] === 'N.A') {
      counter += 0;
    } else if ( array2[i] === array1[i]) {
      counter += 1;
    } else {
      counter -= 0.5;
    }
  }
  return counter;
}

const blablabla = (templateArray, verifyArray, checker) => checker(templateArray, verifyArray);

console.log(blablabla(rightAnswers, studentAnswers, checker));
