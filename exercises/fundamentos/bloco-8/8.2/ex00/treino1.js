const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 5 === 0) {
    return console.log(numbers[index]);
  }
}
