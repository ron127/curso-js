// faça um progama para calcular o valor gasto de combustível em uma viagem.

// você tera 3 variaveis. sendo elas;
//  1 - preço do etanol;
//  2 - preco da gasolina;
//  3 - o tipo de combustivel que esta no seu carro;
//  4 - gasto nédio de combustivel do carro por km;
//  5 - distãncia em km de viagem;

//  imprima no console o valor que sera gasto para realizar esta viagem.
const precoEtanol = 5.79
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

let valorGasto;

if (tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
} else {
    valorGasto = litrosConsumidos * precoGasolina;
}
console.log(valorGasto.toFixed(2));