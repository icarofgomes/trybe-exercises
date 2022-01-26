const connection = require('./connection');

const getNewAuthor = (authorData) => {
    const { id, firstName, middleName, lastName } = authorData;

    const fullName = [firstName, middleName, lastName]
        .filter((name) => name)
        .join(' ');
    
    return {
        id,
        firstName,
        middleName,
        lastName,
        fullName,
    };
};

const serialize = (authorData) => authorData.map((item) => getNewAuthor({
    id: item.id,
    firstName: item.first_name,
    middleName: item.middle_name,
    lastName: item.last_name
}));

const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM authors;'
    );
    return serialize(authors);
};

const findById = async (id) => {
    const query =
    'SELECT id, first_name, middle_name, last_name FROm authors WHERE id = ?';

    const [authorData] = await connection.execute(query, [id]);

    if (authorData.length === 0) return null;

    return serialize(authorData)[0];
};

const createAuthor = async (firstName, middleName, lastName) => {
    const [author] = await connection.execute(
        'INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?);',
        [firstName, middleName, lastName]
    );
    return {
        id: author.insertId,
        firstName,
        middleName,
        lastName,
    };
};

const findByName = async (firstName, middleName, lastName) => {
    let query = 'SELECT id, first_name, middle_name, last_name FROM authors ';

    if (middleName) {
        query += 'WHERE first_name = ? AND middle_name = ? AND last_name = ?;';
    } else {
        query += 'WHERE first_name = ? AND last_name = ?;';
    };

    const params = middleName ? [firstName, middleName, lastName] : [firstName, lastName];

    const [authorData] = await connection.execute(query, params);

    if (authorData.length === 0) return null;

    return serialize(authorData);
}

module.exports = {
    getAll,
    findById,
    createAuthor,
    findByName,
};
