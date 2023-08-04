const notas = [10, 6.5, 8, 7.5];

let sum = 0;

notas.forEach(function (element, index) {
  sum += element;
  console.log("index", index);
});

console.log("sum", sum);
