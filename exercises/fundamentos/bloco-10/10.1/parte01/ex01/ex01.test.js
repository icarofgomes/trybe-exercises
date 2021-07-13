const {sum} = require('./ex01');

describe("A função soma", () => {

  it("A soma 4 + 5 retorna 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("A soma 0 + 0 retorna 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("A função lança um erro quando a soma é entre 4 e '5'", () => {
    expect(() => {sum(4, '5')}).toThrow();
  });

  it("Retorna a mensagem 'parameters must be numbers' se um termo for string", () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});
