const fs = require('fs').promises;

const changeFamily = async() => {
    const data = await fs.readFile('./simpsonNelson.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const updateFamily = simpsons.filter((simpson) => simpson.id !== '8');
    updateFamily.push({ id: '5', name: 'Maggie Simpson' });
    await fs.writeFile('./simpsonMaggie.json', JSON.stringify(updateFamily));
}

changeFamily();