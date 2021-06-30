const specialFruit = ['Banana', 'Manga', 'Laranja'];
const additionalItems = ['Mel', 'Granola'];


const fruitSalad = (fruits, adds) => [...fruits, ...adds];


console.log(fruitSalad(specialFruit, additionalItems));
