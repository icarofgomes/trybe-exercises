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
  if (dezDaysList[i] === 25){
    createLiDay.className = 'day holiday friday';
  } else if ( dezDaysList[i] === 24 || dezDaysList[i] === 31){
      createLiDay.className = 'day holiday';
  } else if ( dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18){
    createLiDay.className = 'day friday';
  } else {
    createLiDay.className = 'day';
  }
    ulDays.appendChild(createLiDay)
  }
}
setDays();

// Ex. 2

function addBtnHoliday(str){
  let btn = document.createElement('button');
  let divBtn = document.querySelector('.buttons-container');
  btn.id = 'btn-holiday';
  btn.innerHTML = str;
  divBtn.appendChild(btn);
}
addBtnHoliday('Feriados');

// Ex. 3
let btnHoliday = document.querySelector('#btn-holiday');
function holidayChange (){
  let holidayChangeDays = document.querySelectorAll('.holiday');
  for (let i = 0; i < holidayChangeDays.length; i += 1){
    if (holidayChangeDays[i].style.backgroundColor == 'red'){
      holidayChangeDays[i].style.backgroundColor = 'rgb(238,238,238)';
    } else{
      holidayChangeDays[i].style.backgroundColor = 'red';
    }
  }
}
btnHoliday.addEventListener('click', holidayChange);

// Ex. 4
function addBtnFriday(str){
  let btn = document.createElement('button');
  let divBtn = document.querySelector('.buttons-container');
  btn.id = 'btn-friday';
  btn.innerHTML = str;
  divBtn.appendChild(btn);
}
addBtnFriday('Sexta-feira');

// Ex. 5
let btnFriday = document.querySelector('#btn-friday');
function fridayChange (){
  let fridayChangeDays = document.querySelectorAll('.friday');
  for (let i = 0; i < fridayChangeDays.length; i += 1){
    if (fridayChangeDays[i].style.backgroundColor == 'green'){
      fridayChangeDays[i].style.backgroundColor = 'rgb(238,238,238)';
    } else{
      fridayChangeDays[i].style.backgroundColor = 'green';
    }
  }
}
btnFriday.addEventListener('click', fridayChange);

// Ex. 6
let daysArray = document.querySelectorAll('.day');
function focusDay(event){
  event.target.style.fontSize = '25px';
  event.target.style.fontWeight = '600';
}
function unFocusDay(event){
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '500';
}
for (let i = 0; i < daysArray.length; i += 1){
  daysArray[i].addEventListener('mouseover', focusDay);
  daysArray[i].addEventListener('mouseleave', unFocusDay)
}