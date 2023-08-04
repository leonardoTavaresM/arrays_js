const notas = [10, 6, 8];

notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

const media = soma / notas.length;

console.log("media push", media);
