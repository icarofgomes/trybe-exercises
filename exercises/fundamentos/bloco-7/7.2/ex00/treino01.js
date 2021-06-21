const updateObject = (object, key, value) => object[key] = value;
updateObject((cadastro = {}), 'nome', 'Icaro');
console.log(cadastro);
