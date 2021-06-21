const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Ex 1
const addKey = (obj, key, value) => obj[key] = value;
addKey(lesson2, 'turno', 'manhã');

// Ex 2
const listOfKeys = obj => Object.keys(obj);

// Ex 3
const objLength = obj => Object.keys(obj).length;

// Ex 4
const listOfValues = obj => Object.values(obj);

// Ex 5
const allLessons = {lesson1: lesson1, lesson2: lesson2, lesson3: lesson3};

// Ex 6
const totalStudents = () => {
  const lessonStudents1 = allLessons.lesson1.numeroEstudantes;
  const lessonStudents2 = allLessons.lesson2.numeroEstudantes;
  const lessonStudents3 = allLessons.lesson3.numeroEstudantes;
  return lessonStudents1 + lessonStudents2 + lessonStudents3;
}

// Ex 7
const getValueByNumber = (obj, number) => Object.values(obj)[number];

// Ex 8
const verifyPair = (obj, key, value) => obj[key] === value ? true : false;

// Bonus
const mathCount = (obj) => {
  const arrayLessons = Object.keys(obj);
  let counter = 0;
  for (let i = 0; i < arrayLessons.length; i += 1){
    const currentLesson = arrayLessons[i];
    if (obj[currentLesson].materia === 'Matemática'){
      counter += obj[currentLesson].numeroEstudantes;
    }
  }
  return counter;
}

const createReport = (obj, name) => {
  const objCreated = {};
  const arrayObjLessons = Object.keys(obj);
  const arrayLessons = [];
  let counter = 0;

  for (let i = 0; i < arrayObjLessons.length; i += 1) {
    const currentLesson = arrayObjLessons[i];
    if (obj[currentLesson].professor === name) {
      arrayLessons.push(obj[currentLesson].materia);
      counter += obj[currentLesson].numeroEstudantes;
    }
  }
  objCreated.professor = name;
  objCreated.aulas = arrayLessons;
  objCreated.estudantes = counter;
  return objCreated;
}

