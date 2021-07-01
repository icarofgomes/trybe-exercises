const persons = [
  { firstName: 'Maria', lastName: 'Ferreira' },
  { firstName: 'João', lastName: 'Silva' },
  { firstName: 'Antonio', lastName: 'Cabral' },
];

const newObj = persons.map((person) => {
  return {fullName: `${person.firstName} ${person.lastName}`};
});
console.log(newObj);
