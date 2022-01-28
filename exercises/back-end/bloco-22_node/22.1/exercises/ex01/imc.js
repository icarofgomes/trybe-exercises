const readLine = require('readline-sync');

const calcularImc = () => {
    const peso = readLine.questionFloat('Qual é o seu peso em Kilos? ');
    const altura = readLine.questionFloat('Qual é a sua altura em metros? ');
    const imc = peso / Math.pow(altura, 2);
    let faixa = '';
    if ( imc < 18.5) faixa = 'Abaixo do peso(magreza)';
    if ( 18.5 <= imc && imc < 25) faixa = 'Peso normal';
    if ( 25 <= imc && imc < 30) faixa = 'Acima do peso(sobrepeso)';
    if ( 30 <= imc && imc < 35) faixa = 'Obesidade grau I';
    if ( 35 <= imc && imc < 40) faixa = 'Obesidade grau II';
    if ( 40 <= imc) faixa = 'Obesidade grau III e IV';
    return console.log(`O seu Imc é de ${ imc.toFixed(2) } e é considerado: ${ faixa }`);
}

module.exports = calcularImc;
