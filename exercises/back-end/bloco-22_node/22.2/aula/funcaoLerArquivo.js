const fs = require('fs');

const funcaoLerArquivo = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, content) => {
            if (err) reject(err);

            resolve(content);
        })
    });
}

funcaoLerArquivo('./file.txt')
    .then((content) => console.log(`Arquivo lido com ${ content.byteLength } bytes`))
    .catch((err) => console.error(`Erro ao ler o arquivo: ${ err.message }`));
 