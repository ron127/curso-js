
function calcularimc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarimc(imc) {
   if (imc < 18.5) {
      return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
         return 'abaixo do peso';
    } else if (imc >= 25 && imc < 30) {
         return 'peso norma';
    } else if (imc >= 30 && imc < 40) {
      return 'obeso';
    }  else {
         return 'obsidade grave';
    }

   }
   
// main
(function () {
   const peso = 75;
   const altura = 1.75;

   const imc = calcularimc(peso, altura);
   console.log(classificarimc(imc));
})();
