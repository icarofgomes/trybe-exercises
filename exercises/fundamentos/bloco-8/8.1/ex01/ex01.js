const newEmployees = () => {
  const employees = {
    id1: setEmployee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: setEmployee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: setEmployee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const setEmployee = (fullName) => {
  const email = `${fullName.split(' ').join('_').toLowerCase()}@trybe.com`
  const obj = {Nome: fullName, Email: email};
  return obj;
};

console.log(newEmployees());