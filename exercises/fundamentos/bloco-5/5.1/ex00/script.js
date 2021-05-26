document.querySelector('#header-container').style.background = 'MediumSeaGreen';
document.querySelector(".emergency-tasks").style.background = "DarkSalmon";
let repeat = 2;
for (let i = 0; i < repeat; i += 1){
  document.getElementsByTagName("h3")[i].style.background = "DeepPink";
}
document.querySelector('.no-emergency-tasks').style.background = "Gold";
for (let i = 3; i > repeat-1; i -= 1){
  document.getElementsByTagName("h3")[i].style.background = "Black";
}
document.querySelector('#footer-container').style.background = 'DarkSlateGrey';