const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/recipes', (_req, res) => {
    const orderedRecipes = recipes.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    return res.json(orderedRecipes);
});


app.get('/recipes/search', (req, res) => {
    const { name } = req.query;
    
    const filteredRecipes = recipes.filter((r) => r.name.includes(name));
    
    return res.status(200).json(filteredRecipes);
})

app.get('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if(!recipe) return res.status(404).json({ message: 'Receita não encontrada!' });

    return res.status(200).json(recipe);
});

app.post('/recipes', (req, res) => {
    const { id, name, price } = req.body;

    recipes.push({ id, name, price });

    return res.status(200).json({ message: 'Receita criada com sucesso!'});
})

app.put('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

    if ( recipeIndex === -1 ) return res.status(404)
        .json({ message: 'Receita não encontrada' });

    recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

    return res.status(204).end();
})

app.delete('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

    if (recipeIndex === -1) return res.status(404)
        .json({ message: 'Receita não encontrada!' });

    recipes.splice(recipeIndex, 1);

    res.status(204).end();
})

app.get('/drinks', (_req, res) => {
    const orderedDrinks = drinks.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
    return res.json(orderedDrinks);
})

app.get('/drinks/search', (req, res) => {
    const { name } = req.query;
    const filteredDrinks = drinks.filter((d) => d.name.includes(name));

    return res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', (req, res) => {
    const { id } = req.params;
    const drink = drinks.find((d) => d.id === parseInt(id));

    if(!drink) return res.status(404).json({ message: 'Drink não encontrado!' });

    return res.status(200).json(drink);
})

app.post('/drinks', (req, res) => {
    const { id, name, price } = req.body;
    
    drinks.push({ id, name, price});

    return res.status(200).json({ message: 'Drink adicionado com sucesso!' })
})

app.put('/drinks/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const drinkIndex = drinks.findIndex((d) => d.id === parseInt(id));

    if (drinkIndex === -1) return res.status(404).json({ message: 'Drink não encontrado!' });

    console.log(drinkIndex);

    drinks[drinkIndex] = { ...drinks[drinkIndex], name, price};

    return res.status(204).end();
})

app.listen(3001, () => {
    console.log('Aplicação ouvindo na porta 3001');
});
