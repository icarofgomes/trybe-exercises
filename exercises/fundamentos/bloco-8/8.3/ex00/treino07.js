const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const productsAndPrices = products.map((elemento, indice) => {
  return {[elemento]: prices[indice]};
})

console.log(productsAndPrices);
