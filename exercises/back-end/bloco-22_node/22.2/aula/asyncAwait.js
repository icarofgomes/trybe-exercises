const fs = require('fs').promises;

async function main () {
    try {
        await fs.writeFile('./file.txt', 'Meu texto utilizando Async Await');
        console.log('Arquivo concluído com sucesso!');
    } catch (err) {
        console.error(err.message);
    }
}

main();
