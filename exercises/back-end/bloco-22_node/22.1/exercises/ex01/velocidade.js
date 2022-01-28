const readLine = require('readline-sync');


const velocidade = () => {
    const distancia = readLine.questionFloat('Quantos kilometros o carro percorreu? ');
    const tempo = readLine.questionInt('Quantos minutos a viagem durou? ');
    const velMedia = (distancia*1000) / (tempo*60)
    return console.log(`A velocidade média foi de ${ velMedia.toFixed(2) } m/s`);
}

module.exports = velocidade;
