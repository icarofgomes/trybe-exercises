const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
    res.send('pong')
})

app.post('/hello', (req, res) => {
    const { name } = req.body;

    res.status(200).json({"message": `hello, ${ name }`});
})

app.post('/greetings', (req, res) => {
    const { name, age } = req.body;
    if( age > 17 ) {
        res.status(200).json({ "message": `Hello, ${ name }`});
    }
    res.status(401).json({ "message": "Unauthorized" });
})

app.put('/users/:name/:age', (req, res) => {
    const { name, age } = req.params;

    res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });    
})

/* Exercícios simpsons */

const readFile = async() => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    return JSON.parse(data);
}

const writeFile = (data) => {
    return fs.writeFile('./simpsons.json', JSON.stringify(data));
}

app.get('/simpsons', async(_req, res) => {
    const simpsons = await readFile();

    res.status(200).json(simpsons);
})

app.get('/simpsons/:id', async(req, res) => {
    const { id } = req.params;
    const simpsons = await readFile();
    const simpson = simpsons.find((simpson) => `${simpson.id}` === id);
    if(!simpson) {
        res.status(404).json({ 'message': 'simpson not found' });
    }

    res.status(200).json(simpson);
})

app.post('/simpsons', async(req, res) => {
    const { id, name } = req.body;
    const simpsons = await readFile();
    if(simpsons.find((simpson) => simpson.id === id)) {
        res.status(409).json({ 'message': 'id already exists' });
    }
    simpsons.push({ id, name });
    writeFile(simpsons);

    res.status(204).end();
})

/* Configurações gerais */

app.use((err, _req, res, _next) => {
    res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
})

app.listen(3000, () => console.log('Ouvindo na porta 3000'));
