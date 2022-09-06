/*  Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade 
   calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

   média = (nota 1 + nota2 + nota3) / 3;

   classificação:
   - Média menor que 5, reprovado:
   - Média entre 5 e 7, recuperação;
   - Média acima de 7, passou de semestre:
*/

const nota1 = 10;
const nota2 = 9;
const nota3 = 7;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media);


if (media < 5) {
   console.log('reprovação');
} else if (media >= 5 && media <= 7) {
   console.log('recuperação');
} else {
   console.log('passou de semestre');
}




