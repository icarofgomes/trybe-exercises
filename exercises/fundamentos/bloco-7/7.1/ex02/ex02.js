const biggerWord = phrase => {
  let splittedPhrase = phrase.split(' ');
  let biggerWordLength = 0;
  let biggerWord = '';
  for (let i = 0; i < splittedPhrase.length; i += 1){
    if (splittedPhrase[i].length > biggerWordLength){
      biggerWordLength = splittedPhrase[i].length;
      biggerWord = splittedPhrase[i]
    }
  }
  return biggerWord;
}

console.log(biggerWord('O rato roeu a roupa do rei da Babilonia'))
