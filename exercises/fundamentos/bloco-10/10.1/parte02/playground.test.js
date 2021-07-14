const {encode, decode} = require('./playground');

describe('Testes das funções encode e decode:', () => {
  it('Testando se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })

  it('Encode: As vogais a, e, i, o, u devem retornar 1, 2, 3, 4, 5 respectivamente', () => {
    expect(encode('a')).toBe('1');
    expect(encode('e')).toBe('2');
    expect(encode('i')).toBe('3');
    expect(encode('o')).toBe('4');
    expect(encode('u')).toBe('5');
  })
  
  it('Decode: Os números 1, 2, 3, 4, 5 devem retornar a, e, i, o, u respectivamente', () =>{
    expect(decode('1')).toBe('a');
    expect(decode('2')).toBe('e');
    expect(decode('3')).toBe('i');
    expect(decode('4')).toBe('o');
    expect(decode('5')).toBe('u');
  })

  it('As demais letras e números não deverão ser convertidas', () => {
    expect(encode('aeioubcd')).toBe('12345bcd');
    expect(decode('12345678')).toBe('aeiou678');
  })

  it('O número de caracteres da string não pode alterar após passar a função', () => {
    expect(encode('aeiou').length).toBe(5);
    expect(decode('12345').length).toBe(5);
  })
})
