let salario = 3000;
let inssAliq1 = 0.08;
let inssAliq2 = 0.09;
let inssAliq3 = 0.11;
let inssAliq4 = 570.88;
let irAliq1 = 0;
let irAliq2 = 0.075;
let irAliq3 = 0.15;
let irAliq4 = 0.225;
let irAliq5 = 0.275;
let salBase = null;
let salLiq = null;

if ( salario < 1556.94){
  inss = salario * inssAliq1;
}else if ( salario <= 2594.92){
  inss = salario * inssAliq2;
}else if (salario <= 5189.82){
  inss = salario * inssAliq3
}else{
  inss = 570.88
}

salBase = salario - inss;

if (salBase <= 1903.98){
  irpf = irAliq1;
}else if ( salBase <= 2826.65){
  irpf = (salBase * irAliq2) - 142.8;
}else if ( salBase <= 3751.05){
  irpf = (salBase * irAliq3) - 354.8;
}else if (salBase <= 4664.68){
  irpf = ( salBase * irAliq4) - 636.13;
}else{
  irpf = ( salBase * irAliq5) - 869.36;
}

salLiq = salBase - irpf;

console.log(salLiq);
