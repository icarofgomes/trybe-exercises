const readLine = require('readline-sync');

const sorteio = () => {
    const choosedNumber = readLine.questionInt('Escolha um número de 1 a 10: ');
    const numeroGerado = Math.round(Math.random()*10);
    if (numeroGerado === choosedNumber) {
        console.log('Parabéns, número correto!');
    } else {
        console.log(`Opa, não foi dessa vez. O número era ${ numeroGerado }`);
    }
    const continueGame = readLine.question('Digite sim para jogar novamente: ');
    if (continueGame === 'sim') return sorteio();
    console.log('Até mais!');
}

module.exports = sorteio;
