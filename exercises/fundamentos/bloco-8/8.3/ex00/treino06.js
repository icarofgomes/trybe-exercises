const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => (Math.abs(number) * -1));

console.log(negativeNumbers);
console.log(numbers);
