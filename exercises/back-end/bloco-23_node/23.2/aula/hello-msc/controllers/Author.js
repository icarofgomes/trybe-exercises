const Author = require('../services/Author');
const Joi = require('joi');

const getAll = async (_req, res) => {
    const authors = await Author.getAll();

    return res.status(200).json(authors);
};

const findById = async (req, res, next) => {
    const { id } = req.params;

    const author = await Author.findById(id);

    if (author.error) return next(author.error);

    return res.status(200).json(author);
};

const createAuthor = async (req, res, next) => {
    const { first_name, middle_name, last_name } = req.body;

    const { error } = Joi.object({
        first_name: Joi.string().not().empty().required(),
        last_name: Joi.string().not().empty().required(),
    })
        .validate({ first_name, last_name });
    ;

    if (error) {
        return next(error);
    }

    const author = await Author.createAuthor(first_name, middle_name, last_name);

    if (author.error) {
        return next(author.error);
    }

    return res.status(201).json(author);
};

module.exports = {
    getAll,
    findById,
    createAuthor,
};
