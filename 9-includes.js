const alunos = ["joao", "juliana", "ana", "caio"];
const medias = [10, 8, 7.6, 9];

const listaDeAlunosEMedias = [alunos, medias];

function displayNameAndGrade(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    console.log(`${aluno} está cadastrado!`);
    const alunos = listaDeAlunosEMedias[0];
    const average = listaDeAlunosEMedias[1];

    const index = alunos.indexOf(aluno);

    const studentAverage = average[index];

    console.log("a média é", studentAverage);
  } else {
    console.log("nao encontrado");
  }
}

displayNameAndGrade("joao");
