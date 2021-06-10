const selectStateField = document.querySelector('#select-state');
const inputedDate = document.querySelector('#input-date');
const subitButton = document.querySelector('#submit-button');
const inputName = document.querySelector('#input-name');
const states = 
[
  'Acre - AC',
  'Alagoas - AL',
  'Amapá - AP',
  'Amazonas - AM',
  'Bahia - BA',
  'Ceará - CE',
  'Espírito Santo - ES',
  'Goiás - GO',
  'Maranhão - MA',
  'Mato Grosso - MT',
  'Mato Grosso do Sul - MS',
  'Minas Gerais - MG',
  'Pará - PA',
  'Paraíba - PB',
  'Paraná - PR',
  'Pernambuco - PE',
  'Piauí - PI',
  'Rio de Janeiro - RJ',
  'Rio Grande do Norte - RN',
  'Rio Grande do Sul - RS',
  'Rondônia - RO',
  'Roraima - RR',
  'Santa Catarina - SC',
  'São Paulo - SP',
  'Sergipe - SE',
  'Tocantins - TO',
  'Distrito Federal - DF',
];

function stateFieldLoad(){
  for (let i = 0; i < states.length; i += 1){
    let newOptionState = document.createElement('option');
    let getInitials = states[i].slice(states[i].indexOf('-')+2).toLowerCase();
    newOptionState.value = getInitials;
    newOptionState.innerHTML = states[i];
    selectStateField.appendChild(newOptionState);
  }
}
window.addEventListener('load', stateFieldLoad);

function verifyDate() {
  const itemContent = inputedDate.value;
  const day = itemContent.slice(0, 2);
  const mounth = itemContent.slice(3, 5);
  const year = itemContent.slice(6, 10);
  if (day < 1 || day > 31) {
    return window.alert('Formato de data inválido, tente novamente!');
  }
  if (mounth < 1 || mounth > 12) {
    return window.alert('Formato de data inválido, tente novamente!');
  }
  if (year < 0) {
    return window.alert('Formato de data inválido, tente novamente!');
  }
}
inputedDate.addEventListener('change', verifyDate);

function verifyName(){
  let trimmedText = inputName.value.trim();
  if ( trimmedText.length === 0 || trimmedText.length > 40){
    return true;
  }
}

function validateData(event){
  event.preventDefault();
  verifyName();
  if (verifyName() === true){
    return alert('Deu ruim!')
  }
}
subitButton.addEventListener('click', validateData);
