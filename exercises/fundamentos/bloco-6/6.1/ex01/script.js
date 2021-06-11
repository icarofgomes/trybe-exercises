const selectStateField = document.querySelector('#select-state');
const inputedDate = document.querySelector('#input-date');
const subitButton = document.querySelector('#submit-button');
const inputName = document.querySelector('#input-name');
const inputEmail = document.querySelector('#input-email');
const inputCPF = document.querySelector('#input-cpf');
const inputAdress = document.querySelector('#input-address');
const inputCity = document.querySelector('#input-city');
const inputAbstract = document.querySelector('#last-job');
const inputPosition = document.querySelector('#input-position');
const inputDescription = document.querySelector('#input-description');
const resultField = document.querySelector('#result-forms');
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

function verifyName(){
  let trimmedName = inputName.value.trim();
  if (trimmedName.length === 0 || trimmedName.length > 40){
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `Nome inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function verifyEmail(){
  let trimmedEmail = inputEmail.value.trim();
  if (trimmedEmail.length === 0 || trimmedEmail.length > 50){
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `Email inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function verifyCPF(){
  let trimmedCPF = inputCPF.value.trim();
  if (trimmedCPF.length === 0 || trimmedCPF.length > 11){
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `CPF inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function verifyAdress(){
  let trimmedAdress = inputAdress.value.trim();
  if (trimmedAdress.length === 0 || trimmedAdress.length > 200){
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `Endereço inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function verifyCity(){
  let trimmedCity = inputCity.value.trim();
  if (trimmedCity.length === 0 || trimmedCity.length > 28){
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `Cidade inválida: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function verifyAbstract(){
  let trimmedAbstract = inputAbstract.value.trim();
  if (trimmedAbstract.length === 0 || trimmedAbstract.length > 1000){
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `Resumo inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function verifyPosition(){
  let trimmedPosition = inputPosition.value.trim();
  if (trimmedPosition.length === 0 || trimmedPosition.length > 40){
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `Cargo inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function verifyDescription(){
  let trimmedDescription = inputDescription.value.trim();
  if (trimmedDescription.length === 0 || trimmedDescription.length > 500){
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `Descrição do cargo inválida: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function verifyDate() {
  const itemContent = inputedDate.value;
  const day = itemContent.slice(0, 2);
  const mounth = itemContent.slice(3, 5);
  const year = itemContent.slice(6, 10);
  if (day < 1 || day > 31 || mounth < 1 || mounth > 12 || year < 0) {
    let errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.innerHTML = `Formato de data inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }
}

function validateData(event){
  resultField.innerHTML = '';
  event.preventDefault();
  
  verifyName();
  verifyEmail();
  verifyCPF();
  verifyAdress();
  verifyCity();
  verifyAbstract();
  verifyPosition();
  verifyDescription();
  verifyDate();
}
subitButton.addEventListener('click', validateData);
