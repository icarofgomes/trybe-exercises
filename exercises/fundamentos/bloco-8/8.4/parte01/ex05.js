const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const allLetters = names.reduce((acc, curr) => acc + curr).toLocaleLowerCase().split('');
  return allLetters.filter((letter) => letter === 'a').length;
}

assert.deepStrictEqual(containsA(), 20);
