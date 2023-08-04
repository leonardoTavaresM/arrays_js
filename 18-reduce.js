const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];

const salaJava = [6, 5, 8, 9, 5, 6];

const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
    return acumulador + nota;
  }, 0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

calculaMedia(salaJS);

//acumulador é um parametro que vai acumulando o valor para cada iteracao do reduce
//nessa aplicacao, ele comecou como 0, e ele vai somar  0 + 7 (a primeira nota de salaJS)
//na proxima, ele vai pegar 7 + 8, a segunda nota, e por ai vai

//nota é cada item do array
