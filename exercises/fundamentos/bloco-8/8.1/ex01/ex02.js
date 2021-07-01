const sorteio = () => Math.round(Math.random()*5);
const aposta = (num) => num === sorteio() ? 'Parabéns você ganhou!!' : 'Tente outra vez!';

console.log(aposta(3));
