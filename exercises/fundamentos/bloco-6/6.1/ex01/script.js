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
const resetButton = document.querySelector('#reset-button');
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
    let getInitials = states[i].slice(states[i].indexOf('-')+2);
    newOptionState.value = getInitials;
    newOptionState.innerHTML = states[i];
    selectStateField.appendChild(newOptionState);
  }
}

function verifyName(){
  let trimmedName = inputName.value.trim();
  if (trimmedName.length === 0 || trimmedName.length > 40){
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Nome inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  } else {
    return false;
  }
}

function verifyEmail(){
  let trimmedEmail = inputEmail.value.trim();
  if (trimmedEmail.length === 0 || trimmedEmail.length > 50){
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Email inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }else {
    return false;
  }
}

function verifyCPF(){
  let trimmedCPF = inputCPF.value.trim();
  if (trimmedCPF.length === 0 || trimmedCPF.length > 11){
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `CPF inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }else {
    return false;
  }
}

function verifyAdress(){
  let trimmedAdress = inputAdress.value.trim();
  if (trimmedAdress.length === 0 || trimmedAdress.length > 200){
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Endereço inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }else {
    return false;
  }
}

function verifyCity(){
  let trimmedCity = inputCity.value.trim();
  if (trimmedCity.length === 0 || trimmedCity.length > 28){
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Cidade inválida: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }else {
    return false;
  }
}

function verifyAbstract(){
  let trimmedAbstract = inputAbstract.value.trim();
  if (trimmedAbstract.length === 0 || trimmedAbstract.length > 1000){
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Resumo inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }else {
    return false;
  }
}

function verifyPosition(){
  let trimmedPosition = inputPosition.value.trim();
  if (trimmedPosition.length === 0 || trimmedPosition.length > 40){
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Cargo inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }else {
    return false;
  }
}

function verifyDescription(){
  let trimmedDescription = inputDescription.value.trim();
  if (trimmedDescription.length === 0 || trimmedDescription.length > 500){
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Descrição do cargo inválida: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }else {
    return false;
  }
}

function verifyDate() {
  const itemContent = inputedDate.value;
  const day = itemContent.slice(0, 2);
  const mounth = itemContent.slice(3, 5);
  const year = itemContent.slice(6, 10);
  if (day < 1 || day > 31 || mounth < 1 || mounth > 12 || year < 0) {
    let errorMsg = document.createElement('p');
    errorMsg.innerHTML = `Formato de data inválido: Tente novamente!`;
    resultField.appendChild(errorMsg);
  }else {
    return false;
  }
}

function resetResults(){
  resultField.innerHTML = '';
  if (resultField.classList.contains('error')){
    resultField.classList.remove('error');
  }
  if (resultField.classList.contains('sucess')){
    resultField.classList.remove('sucess');
  }
}

function validateData(event){
  resetResults();
  event.preventDefault();
  
  if (verifyName() !== false || verifyEmail() !== false || verifyCPF() !== false ||
      verifyAdress() !== false || verifyCity() !== false || verifyAbstract() !== false ||
      verifyPosition() !== false || verifyDate() !== false){
        resultField.classList.add('error');
  } else {
    resultField.classList.add('sucess');
    resultField.innerHTML += `<strong>Nome:</strong> ${inputName.value}<br>`;
    resultField.innerHTML += `<strong>Email:</strong> ${inputEmail.value}<br>`;
    resultField.innerHTML += `<strong>CPF:</strong> ${inputCPF.value}<br>`;
    resultField.innerHTML += `<strong>Endereço:</strong> ${inputAdress.value}<br>`;
    resultField.innerHTML += `<strong>Cidade:</strong> ${inputCity.value}<br>`;
    resultField.innerHTML += `<strong>Estado:</strong> ${selectStateField.value}<br>`;
    const inputType = document.querySelector('input[name="type"]:checked');
    resultField.innerHTML += `<strong>Tipo:</strong> ${inputType.value}<br>`;
    resultField.innerHTML += `<strong>Resumo:</strong> ${inputAbstract.value}<br>`;
    resultField.innerHTML += `<strong>Cargo:</strong> ${inputPosition.value}<br>`;
    resultField.innerHTML += `<strong>Descrição do cargo:</strong> ${inputDescription.value}<br>`;
    resultField.innerHTML += `<strong>Data de Início:</strong> ${inputedDate.value}`;
  }
}

window.addEventListener('load', stateFieldLoad);
subitButton.addEventListener('click', validateData);
resetButton.addEventListener('click', resetResults);
