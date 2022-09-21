
/*
    faça um progama para calcular o valor gasto de combustível em uma viagem.

    você tera 3 variaveis. sendo elas:
    1- preço do combustivel;
    2- gasto nédio de combustivel do carro por km;
    3-distãncia em km de viagem;
*/ 

const precoCombustivel = 5.79;
const kmPorlitros = 10;
const distanciaEmKm = 100;


const litrosConsumidos = distanciaEmKm / kmPorlitros;

const valorGasto = litrosConsumidos *  precoCombustivel;
console.log(valorGasto.toFixed(2));






