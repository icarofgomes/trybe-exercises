const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};


describe('Uppercase function test:', () => {
  it('Verify if the return of the string is "BOLA"', (done) => {
    uppercase('bola', (result) => {
      expect(result).toBe('BOLA');
      done();
    })
  })
})

