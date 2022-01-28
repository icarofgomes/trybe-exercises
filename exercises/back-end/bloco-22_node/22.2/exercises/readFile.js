const fs = require('fs').promises;

const readFile = async() => {
    const content = await fs.readFile('./simpsons.json', 'utf-8');
    const data = JSON.parse(content);
    data.forEach((c) => console.log(`${c.id} - ${c.name}`));
}

readFile();
