const fs = require('fs');

const funcaoLerArquivo = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, content) => {
            if (err) reject(err);
            resolve(content);
        });
    });
}

funcaoLerArquivo('./file1.txt')
    .then((content) => {
        console.log(`Message: ${ content }`);
        return funcaoLerArquivo('./file2.txt');
    })
    .then((content) => {
        console.log(`Message: ${ content }`);
        return funcaoLerArquivo('./file3.txt');
    })
    .then((content) => {
        console.log(`Message: ${ content }`);
    })
    .catch((err) => console.error(err.message));
