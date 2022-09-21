/*
   1) Crie uma classe para representar carros. 
   Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
   Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
   gasto em reais para realizar este percurso.
*/
  
class carro {
   marca;
   cor;
   gastoMedioporKm;

   constructor(marca, cor, gastoMedioporKm) {
      this.marca = marca;
      this.cor = cor;
      this.gastoMedioporKm = gastoMedioporKm;
   }
 

 calcularGastoDePercuso(distanciaEmKm,precoCombustivel) {
   return distanciaEmKm * this.gastoMedioporKm * precoCombustivel;
 }

}

const astra = new carro('astra','cinza',1 / 12);
console.log(astra.calcularGastoDePercuso(70, 5));
const palio = new carro('fiat', 'azul',1 / 10);
console.log(astra.calcularGastoDePercuso(70, 5));











