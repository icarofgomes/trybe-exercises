const fs = require('fs').promises;

const addNelson = async() => {
    const data = await fs.readFile('./simpsonFamily.json', 'utf-8');
    const simpsons = JSON.parse(data);
    simpsons.push({id: '8', name: 'Nelson Muntz'});
    await fs.writeFile('./simpsonNelson.json', JSON.stringify(simpsons));
}

addNelson();