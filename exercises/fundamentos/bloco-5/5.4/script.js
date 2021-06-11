let texto = document.querySelector('#texto-1');
let backgroundColor = document.querySelector('#texto-1');
let colorButton = document.querySelector('#color-button');
let backgroundButton = document.querySelector('#background-button');

function changeColorText(color){
  texto.style.color = color;
}

function setColorText(){
  let colorInput = document.querySelector('#color-input').value;
  changeColorText(colorInput);
}
colorButton.addEventListener('click', setColorText);

function changeBackgroundColor(color){
  backgroundColor.style.backgroundColor = color;
}

function setBackgroundColor(){
  let colorInput = document.querySelector('#background-input').value;
  changeBackgroundColor(colorInput);
}
backgroundButton.addEventListener('click', setBackgroundColor);