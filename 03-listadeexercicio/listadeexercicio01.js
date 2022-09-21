/*
  1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
   calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
 


  Classificação:
  - Média menor que 5, reprovação;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 8;
const nota3 = 7;
const média = (nota1 + nota2 + nota3) / 3;
console.log(média);

if (media < 5) {
    console.log('reprovação');
} else if (media >= 5 && media <= 7) {
    console.log('recuperação');
} else {
    console.log('passou de semestre');
}










