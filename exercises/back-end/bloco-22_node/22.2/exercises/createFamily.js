const fs = require('fs').promises;

const createFamily = async() => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const family = simpsons.filter((simpson) => parseInt(simpson.id) <= 4 );
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
}

createFamily();
