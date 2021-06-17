const preDef = `Tryber x aqui!`;
const skills = ['Html', 'JavaScript', 'CSS', 'React', 'Redux']

const wordToPhrase = name => preDef.replace('x', name);

const completPharase = name => {
  let ordenedSkills = skills.sort();
  return `${wordToPhrase(name)} Minhas principais habilidades são: ${ordenedSkills}`
}

console.log(completPharase('Pharaoh'));
