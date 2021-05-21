// Parte 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1){
  for (let index = 0; index < numbers.length; index += 1){
    if ( numbers[index] < numbers[index-1]){
      let position = numbers[index];
      numbers[index] = numbers[index-1];
      numbers[index-1] = position;
    };
  };
};

console.log(numbers);

// Parte 2

for (let i = 0; i < numbers.length; i += 1){
  for (let index = 0; index < numbers.length; index += 1){
    if ( numbers[index] > numbers[index-1]){
      let position = numbers[index];
      numbers[index] = numbers[index-1];
      numbers[index-1] = position;
    };
  };
};
console.log(numbers);

// Parte 3

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersModified = [];

for (let i = 0; i < numbers.length; i += 1){
  if (i < numbers.length - 1){
    var novo = numbers[i] * numbers[i+1];
  } else{
    var novo = numbers[i] * 2;
  };
  numbersModified.push(novo);
};
console.log(numbersModified);
