const math = require('./math');
jest.mock('./math');

describe('Teste na função math', () => {
  it('Função Subtrair', () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(2, 1);
    expect(math.subtrair).toHaveBeenCalled();
  })
  it('Função Multiplicar', () => {
    const mockMultiplicar = jest.fn().mockReturnValue('10');

    mockMultiplicar();
    expect(mockMultiplicar).toHaveBeenCalled();
    expect(mockMultiplicar()).toBe('10');
  })
  it('Função Somar', () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(1, 2);

    expect(math.somar).toHaveBeenCalled();
  })
  it('Função Dividir', () => {
    const mockDividir = jest
      .fn()
        .mockReturnValue('15')
        .mockReturnValueOnce('2')
        .mockReturnValueOnce('5');

    expect(mockDividir).toHaveBeenCalledTimes(0);
    
    expect(mockDividir()).toBe('2');
    expect(mockDividir).toHaveBeenCalledTimes(1);

    expect(mockDividir()).toBe('5');
    expect(mockDividir).toHaveBeenCalledTimes(2);

    expect(mockDividir()).toBe('15');
    expect(mockDividir).toHaveBeenCalledTimes(3);
  })
  it('Teste restaurando a função Subtrair', () => {
    const mockSubtrair = jest
      .spyOn(math, 'subtrair')
      .mockImplementation((a, b) => a - b);

    math.subtrair(5, 1);
    expect(mockSubtrair).toHaveBeenCalledTimes(2);

    expect(mockSubtrair(5, 1)).toBe(4);
    expect(mockSubtrair).toHaveBeenCalledTimes(3);
    expect(mockSubtrair).toHaveBeenCalledWith(5, 1);


    expect(math.subtrair(3, 1)).toBe(2);
  })
})
