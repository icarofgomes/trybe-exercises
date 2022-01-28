const fs = require('fs');

const main = async() => {
    const content = await fs.promises.readFile('./abc.txt', 'utf-8');
    console.log('O valor do content é: ', content);
}

main();
