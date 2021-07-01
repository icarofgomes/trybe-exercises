const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullName = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullName);
