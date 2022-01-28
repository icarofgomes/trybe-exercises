const fs = require('fs').promises;

const removeSimpson = async() => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(data);
    const simpsonsRemaining = simpsons
        .filter((simpson) => parseInt(simpson.id) !== 10 && parseInt(simpson.id) !== 6);
    await fs.writeFile('./simpsons2.json', JSON.stringify(simpsonsRemaining));
}

removeSimpson();
