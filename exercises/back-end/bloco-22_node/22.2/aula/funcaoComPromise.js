const calcularDivisao = (number1, number2) => {
    const promise = new Promise((resolve, reject) => {
        if (number2 === 0) reject( new Error("Não pode dividir um número por zero"));

        const resultado = number1 / number2;

        resolve(resultado);
    });

    return promise;
}

calcularDivisao(2, 1)
    .then((result) => console.log(result))
    .catch(e => console.log(e.message));
