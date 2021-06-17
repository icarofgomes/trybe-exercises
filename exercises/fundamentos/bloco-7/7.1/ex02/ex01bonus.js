const fatPure = number => number > 1 ? number * fatPure(number -1) : 1;

console.log(fatPure(5));
