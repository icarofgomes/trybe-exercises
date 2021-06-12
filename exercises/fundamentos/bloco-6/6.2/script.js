const selectStateField = document.querySelector('#select-state');
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

const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) -1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
});

function stateFieldLoad(){
  for (let i = 0; i < states.length; i += 1){
    let newOptionState = document.createElement('option');
    let getInitials = states[i].slice(states[i].indexOf('-')+2);
    newOptionState.value = getInitials;
    newOptionState.innerHTML = states[i];
    selectStateField.appendChild(newOptionState);
  }
}

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      maxLength: 40
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      minLength: 11,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true
    },
    radio: {
      required: true
    },
    abstract: {
      required: true,
      maxLength: 1000
    },
    role: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true
    }
  },
  messages: {
    name: {
      required: 'Campo obrigatório, tente novamente!',
      maxLength: 'Texto muito longo, limite de 40 caracteres.'
    },
    email: {
      required: 'Campo obrigatório, tente novamente!',
      email: 'Insira um e-mail válido!',
      maxLength: 'Texto muito longo, limite de 50 caracteres.'
    },
    cpf: {
      required: 'Campo obrigatório, tente novamente!',
      minLength: 'Tamanho incorreto, digite novamente',
      maxLength: 'Tamanho incorreto, digite novamente'
    },
    address: {
      required: 'Campo obrigatório, tente novamente!',
      maxLength: 'Texto muito longo, limite de 200 caracteres.'
    },
    city: {
      required: 'Campo obrigatório, tente novamente!',
      maxLength: 'Texto muito longo, limite de 28 caracteres.'
    },
    state: {
      required: 'Campo obrigatório, tente novamente!'
    },
    radio: {
      required: 'Campo obrigatório, tente novamente!'
    },
    abstract: {
      required: 'Campo obrigatório, tente novamente!',
      maxLength: 'Texto muito longo, limite de 1000 caracteres.'
    },
    role: {
      required: 'Campo obrigatório, tente novamente!',
      maxLength: 'Texto muito longo, limite de 40 caracteres.'
    },
    description: {
      required: 'Campo obrigatório, tente novamente!',
      maxLength: 'Texto muito longo, limite de 500 caracteres.'
    },
    date: {
      required: 'Campo obrigatório, tente novamente!'
    }
  },

  submitHandler: function (form, values) {
    console.log('DEU')
  },
});

/*
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
      verifyPosition() !== false){
        resultField.classList.add('error');
  } else {
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
    resultField.innerHTML += `<strong>Data de Início:</strong> ${picker}`;
  }
}

subitButton.addEventListener('click', validateData);
resetButton.addEventListener('click', resetResults);
*/
window.addEventListener('load', stateFieldLoad);