const validUser = [
    { username: 'MestreCuca', password: 'MinhaSenhaSuperSeguraSqn' },
    { username: 'McRonald', password: 'Senha123Mudar' },
    { username: 'BurgerQueen', password: 'Senha123Mudar' },
    { username: 'UpWay', password: 'Senha123Mudar' },
]

const authMiddleware = (req, res, next) => {
    const { username, password } = req.headers;

    if (!username || !password) {
        return res.status(401).json({ messsage: 'Username or passaword can`t be blank' });
    }

    const foundUser = validUser.find((user) => user.username === username);

    if (!foundUser) return res.status(401).json({ messsage: 'Invalid cretendials!' });

    if(!(username === foundUser.username && password === foundUser.password)) {
        return res.status(401).json({ messsage: 'Invalid credentials!' });
    }

    req.user = foundUser;

    next();
}

module.exports = authMiddleware;
