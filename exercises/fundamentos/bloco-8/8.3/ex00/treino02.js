const arrayNumbers = [1, 2, 3, 4, 5, 13, 18, 29, 57];

const removeElement = (elementToRemove, array) => array.filter((element) => element !== elementToRemove);

console.log(removeElement(29, arrayNumbers));