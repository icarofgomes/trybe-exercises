const fs = require('fs').promises;

fs.writeFile('./file.txt', 'Meu texto utilizando fs do node', { flag: 'wx' })
    .then(() => {
        console.log('Text escrivinhado com sucesso');
    })
    .catch((err) => {
        console.log(err);
    });
