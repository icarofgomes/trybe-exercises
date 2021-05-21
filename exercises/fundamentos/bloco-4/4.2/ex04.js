let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = media = 0;

for (let i =0; i < numbers.length; i += 1){
  soma += numbers[i];
}

media = soma / (numbers.length);

if (media >= 20){
  console.log('valor maior ou igual a 20')
}else{
  console.log('valor menor do que 20')
};
