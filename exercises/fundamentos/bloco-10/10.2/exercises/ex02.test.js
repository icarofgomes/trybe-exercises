const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};


describe('Teste das funções do banco de dados:', () => {
  it('Result of the function if the user is found', () => {
    expect.assertions(1);
    return getUserName(4).then(data => {
      expect(data).toBe('Mark');
    })
  })
  it('Verify an error in case of invalid ID', () => {
    expect.assertions(1);
    return getUserName(6).catch(error => {
      expect(error).toEqual({error: 'User with 6 not found.'})   
    })
  })
})