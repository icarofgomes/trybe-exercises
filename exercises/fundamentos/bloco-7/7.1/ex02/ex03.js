const clickerButton = document.querySelector('#clicker');
const countResults = document.querySelector('#count-results');
let clickCount = 0;

clickerButton.addEventListener('click', () =>{
  clickCount += 1;
  countResults.innerHTML = clickCount;
});
