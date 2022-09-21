/*Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

function calcularimc(peso, altura) {
    return peso / Math.pow(altura, 2);

}
const peso = 83;
const altura = 1.75;
const imc = calcularimc(peso, altura);
console.log(imc);
if (imc <18.50) {
   console.log('abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
   console.log('peso mormal');
} else if (imc >= 25 && imc < 30) {
   console.log('acima do peso');
} else if (imc >= 30 && imc < 40) {
   console.log('obeso');
} else {
   console.log('obesidade grave');
}


