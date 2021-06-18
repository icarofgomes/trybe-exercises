const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};


const skillsKeys = object => {
  const arraySkills = Object.keys(object)
  for (i of arraySkills) {
    console.log(`${i}, Nível: ${object[i]}`);
  }
}
skillsKeys(student1);
skillsKeys(student2);
