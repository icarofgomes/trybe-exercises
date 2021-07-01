const wakeUp = () => console.log('Acordando!!!');
const breakFast = () => console.log('Bora tomar café!!');
const sleepTime = () => console.log('Partiu cochilinho!!');

const doingThings = (func) => func();

doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleepTime);
