const promisse = new Promise((resolve, reject) => {
  const arrayCreated = [];
  for (let i = 0; i < 10; i += 1) {
    const number = Math.round(Math.random()*50)**2;
    arrayCreated.push(number);
  }
  const number = arrayCreated.reduce((acc, curr) => acc + curr);
  if (number > 8000){
    return reject();
  }
  resolve(number);
})
  .then((number) => {
    const arrayFinal = [(number/2),(number/3) ,(number/5) ,(number/10)];
    return console.log(arrayFinal);
  })
  .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`))
