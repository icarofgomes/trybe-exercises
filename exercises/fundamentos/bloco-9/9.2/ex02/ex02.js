const promisse = new Promise((resolve, reject) => {
  const arrayCreated = [];
  for (let i = 0; i < 10; i += 1) {
    const number = Math.round(Math.random()*50)**2;
    arrayCreated.push(number);
  }
  if (arrayCreated.reduce((acc, curr) => acc + curr) < 8000){
    return reject();
  }
  resolve();
})
  .then(() => console.log(`Promise Resolvida`))
  .catch(() => console.log(`Promise Rejeitada`))

/*
const createNumber = () => {

  return new Promise((resolve, reject) =>{
    if (arrayCreated.reduce((acc, curr) => acc + curr) > 8000) {
      resolve(console.log('Promise Resolvida'));
    } else {
      reject(console.log('Promise Rejeitada'));
    }
  })
}
const status = createNumber().then().catch();
*/