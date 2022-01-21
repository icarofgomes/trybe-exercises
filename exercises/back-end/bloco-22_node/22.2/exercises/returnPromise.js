const returnPromise = (a, b, c) => {
    const promise = new Promise((resolve, reject) => {
        if( isNaN(a) || isNaN(b) || isNaN(c)) reject(new Error('Informe apenas números'));

        const result = (a + b) * c;
        if (result < 50) reject(new Error('Valor muito baixo'));

        resolve(result);
    })
    return promise;
};

const getRandomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);
}

const getPromise = async () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const number3 = getRandomNumber();
    try {
        const result = await returnPromise(number1, number2, number3);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

getPromise();