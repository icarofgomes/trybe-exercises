function calcularDivisao(number1, number2) {
    if(number2 === 0) throw new Error("Não dividirás por zero!");

    const resultado = number1 / number2;

    return resultado;
};

try {
    const resultado = calcularDivisao(6, 0);
    console.log(`resultado: ${ resultado }`);
}   catch(e)   {
    console.log(`Erro: ${ e.message }`)
}

