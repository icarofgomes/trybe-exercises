let peca = 'Cavalo';
peca = peca.toLowerCase();

switch (peca){
  case 'rei':
    console.log("anda uma casa em qualquer direção")
    break;
  case 'rainha':
    console.log("anda quantas casa quiser em qualquer direção");
    break;
  case 'torre':
    console.log("anda apenas na horizontal e vertical");
    break;
  case 'bispo':
    console.log("anda sempre na diagonal");
    break;
  case 'cavalo':
    console.log("anda sempre em L");
    break;
  case 'peao':
    console.log("anda apenas uma casa e somente para frente, em seu primeiro movimento pode andar duas casas")
  default:
    console.log("erro: opção inválida")
}
