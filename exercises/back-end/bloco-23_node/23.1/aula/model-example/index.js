require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

const author = require('./model/author');
const book = require('./model/book');

app.get('/authors', async(_req, res) => {
    const authors = await author.getAll();

    res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
    const { id } = req.params;

    const authorById = await author.findById(id);

    if (!authorById) return res.status(404).json({ message: 'Not found' });

    res.status(200).json(authorById);
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso!' });
})

app.get('/books', async (_req, res) => {
    const books = await book.getAll();

    res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
    const { authorId } = req.query;
    const books = await book.getByAuthorId(authorId);

    res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const books = await book.getByBookId(id);
    
    if (!books) return res.status(404).json({ message: 'Not Found' });

    res.status(200).json(books);
});

app.post('/books', async (req, res) => {
    const { title, author_id } = req.body;
    const isValid = await book.isValid(title, author_id);
    if (!isValid) {
        return res.status(400).json({ message: 'Dados inválidos!' });
    }
    await book.create(title, author_id);

    res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(PORT, () => console.log(`Ouvindo a porta ${PORT}!!`));
