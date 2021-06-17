const fatResult = n => {
  let results = 1;
  for (let i = n; i > 0; i -= 1) {
    results *= i;
  }
  return results;
}

console.log(fatResult(5));
