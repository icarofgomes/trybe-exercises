const connection = require('./connection');

const serialize = (bookData) => ({
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
});

const getAll = async() => {
    const [books] = await connection.execute(
        'SELECT id, title, author_id FROM model_example.books;'
    );
    return books.map(serialize);
};

const getByAuthorId = async(id) => {
    const query = `SELECT id, title, author_id FROM model_example.books WHERE author_id = ?;`;
    const [books] = await connection.execute(query, [id]);
    return books.map(serialize);
};

const getByBookId = async(id) => {
    const query = `SELECT id, title, author_id FROM model_example.books WHERE id = ?;`;
    const [booksData] = await connection.execute(query, [id]);

    if (booksData.length === 0) return null;

    return booksData.map(serialize);
}

const isValid = async(title, author_id) => {
    const query = 'SELECT * FROM model_example.authors WHERE id = ?;';
    if (!title || title.length < 3) return false;
    const [booksData] = await connection.execute(query, [author_id]);
    if (!author_id || booksData.length === 0) return false;
    return true;
}

const create = async(title, author_id) => {
    connection.execute(
        'INSERT INTO model_example.books (title, author_id) VALUES (?, ?)',
        [title, author_id],
    );
};

module.exports = {
    getAll,
    getByAuthorId,
    getByBookId,
    isValid,
    create,
};
