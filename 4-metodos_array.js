const notas = [10, 6, 8, 5.5, 10];

const newNotas = [1, 2, 3];

const notasConcat = notas.concat(newNotas);

console.log("notas concatenadas", notasConcat);

// ******************************************
//.filter() Retorna uma lista contando todos os elementos que passaram em um teste,
//todas que retornam true
const notas2 = [10, 6, 8, 5.5, 10];

const notasFilter = notas2.filter((nota) => nota === 10);

console.log("notasFilter", notasFilter);
// ******************************************
//.find() Funciona de forma parecida com o filter, porém retorna apenas
//o primeiro valor que satisfizer o teste
const notas3 = [10, 6, 8, 5.5, 10];

const notasFind = notas3.find((nota) => nota === 10);
console.log("notasFind", notasFind);

// ******************************************
// .findIndex() Funciona igual o find(), mas retorna o índice em vez do elemento

const notas4 = [10, 6, 8, 5.5, 10];

const notasFindIndex = notas4.findIndex((nota) => nota === 6);
console.log("notasFindIndex", notasFindIndex);

// ******************************************
// .lastIndexOf() É igual o findIndex() porém começa do último elemento, não no primeiro.

const notas5 = [10, 6, 8, 5.5, 10];

const notasLastIndexOf = notas5.lastIndexOf((nota) => nota === 5.5);
console.log("notasLastIndexOf", notasLastIndexOf);
