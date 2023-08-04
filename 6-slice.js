const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1, 2, "rodrigo");

console.log("nomes", nomes);
// [ 'João', ’Rodrigo’, 'Lara', 'Marjorie', 'Leo' ]
