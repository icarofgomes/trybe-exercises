const Author = require('../models/Author');

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

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;

    return true;
};

const getAll = async () => {
    const authors = await Author.getAll();

    return authors.map(getNewAuthor);
};

const findById = async (id) => {
    const author = await Author.findById(id);

    if (!author) return {
        error: {
            code: 'NotFound',
            message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
        },
    };

    return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName) => {
    const validAuthor = isValid(firstName, middleName, lastName);

    if (!validAuthor) return false;

    const existingAuthor = await Author.findByName(firstName, middleName, lastName);

    if (existingAuthor) {
        return {
            error: {
                code: 'alreadyExists',
                message: 'Uma pessoa autora já existe com este nome completo'
            },
        };
    }

    const { id } = await Author.createAuthor(firstName, middleName, lastName);

    return getNewAuthor({
        id,
        firstName,
        middleName,
        lastName,
    });
};

module.exports = {
    getAll,
    findById,
    createAuthor,
};
