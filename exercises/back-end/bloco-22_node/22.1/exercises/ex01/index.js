const readLine = require('readline-sync');
const calcularImc = require('./imc');
const sorteio = require('./sorteio');
const velocidade = require('./velocidade');

const escolhaScript = () => {
    const opcao = readLine.questionInt(
        "Escolha uma opção: 1 - Calcular IMC, 2 - Sorteio, 3 - Velocidade: "
    );
    switch (opcao) {
        case 1:
            return calcularImc();
        case 2:
            return sorteio();
        case 3:
            return velocidade();
        default:
            console.log('Opção inválida!');
    }
}

escolhaScript();
