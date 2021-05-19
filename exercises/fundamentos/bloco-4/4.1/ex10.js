let custo = 200;
let venda = 390;
let custoTotal = custo * 1.2;
let lucro = venda - custoTotal;
let lucroTotal = lucro * 1000


if (custo == 0 || venda == 0){
  console.log('Erro');
}else{
  console.log(lucroTotal)
}

