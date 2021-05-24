let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas'
};


for (let i in info){
  console.log(info[i] + ' e ' + info2[i]);
};

info['recorrente'] = 'Sim';
info2['recorrente'] = 'Sim';

if (info['recorrente'] === 'Sim' && info2['recorrente'] === 'Sim'){
  console.log('Ambos recorrentes');
}else if ( info['recorrente'] === 'Não' && info2['recorrente'] === 'Não'){
  console.log('Ambos não são recorrentes');
}else{
  console.log('Apenas um dos dois é recorrente!');
};
