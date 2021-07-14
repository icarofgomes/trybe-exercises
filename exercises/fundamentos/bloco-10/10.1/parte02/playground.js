const encode = (str) => {
  const arrayStr = str.split('');
  let newStr = '';
  let letras = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  arrayStr.forEach((letra) => letras[letra] ? newStr += letras[letra] : newStr += letra);
  return newStr;
}

const decode = (str) => {
  const arrayStr = str.split('');
  let newStr = '';
  let letras = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  arrayStr.forEach((letra) => letras[letra] ? newStr += letras[letra] : newStr += letra)
  return newStr;
}

module.exports = {encode, decode};
