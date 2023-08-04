const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

//.slice() recorta o array, recebe 2 argumentos, a posicao inicial e a final do recorte
// ela nao altera o array inicial, mas o clona, por isso sempre atribuao em uma nova variavel
//se der apenas o primeiro argumento, ele entende que quer pegar apartir dali ate o final
const slicer = alunos.slice(0, alunos.length / 2);
console.log("slicer:", slicer);
