const fs = require('fs');

const readFile = async() => {
    const content = await fs.promises.readFile('./simpsons.json', 'utf-8');
    return JSON.parse(content);
}

const characterById = (id) => {
    const promise = new Promise(async(resolve, reject) => {
        const data = await readFile();
        const character = data.find((character) => parseInt(character.id) === id)
        if ( !character) {
            reject(new Error('id não encontrado'));
        }
        resolve(character);
    })
    return promise;
}

characterById(115)
    .then((result) => console.log(result))
    .catch((err) => console.error(err.message));

