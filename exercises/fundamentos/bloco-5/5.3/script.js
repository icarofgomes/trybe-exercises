function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Ex. 1
let ulDays = document.querySelector('#days');

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function setDays (){
  let liDayContent;
  let createLiDay;
  for (let i = 0; i < dezDaysList.length; i += 1){
    createLiDay = document.createElement('li');
    liDayContent = dezDaysList[i];
    createLiDay.innerHTML = liDayContent;
  if ( dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31){
      createLiDay.className = 'day holiday';
  } else if ( dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25){
    createLiDay.className = 'day friday';
  } else {
    createLiDay.className = 'day';
  }
    ulDays.appendChild(createLiDay)
  }
}
setDays();

// Ex. 2

function addBtn(str){
  let btn = document.createElement('button');
  let divBtn = document.querySelector('.buttons-container');
  btn.innerHTML = str;
  divBtn.appendChild(btn);
}
addBtn('Feriados');
