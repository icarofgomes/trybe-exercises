const selectStateField = document.querySelector('#select-state');
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

for (let i = 0; i < states.length; i += 1){
  let newOptionState = document.createElement('option');
  let getInitials = states[i].slice(states[i].indexOf('-')+2).toLowerCase();
  newOptionState.value = getInitials;
  newOptionState.innerHTML = states[i];
  selectStateField.appendChild(newOptionState);
}