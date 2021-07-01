const numbers = [50, 85, -30, 3, 15];

const bigger = numbers.reduce((bigger, current) => bigger > current ? bigger : current);

console.log(bigger);