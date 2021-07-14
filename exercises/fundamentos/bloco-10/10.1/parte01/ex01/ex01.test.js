const {sum, myRemove} = require('./ex01');

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

describe('Função myRemove', () => {
  it('Remover o elemento 3 da array retorna o valor esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  it('Quando um elemento for removido não retornar ele na array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Após implementar a função ela não altera a array original', () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).toEqual([1, 2, 4]);
    expect(array).toEqual([1, 2, 3, 4]);
  })

  it('Verificar se ao tentar remover um elemento não existente retorna o array correto', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})
