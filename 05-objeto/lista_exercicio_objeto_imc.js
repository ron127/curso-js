/*
   02) Crie uma clasee para representar pessoas.
   Para cada pessoa teremos os atributos nome, peso e altura.
   As pessoas devem ter a capacidade de dizer o valor do seu imc (imc = peso / (altura * altura));
   instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de altura e peca ao jose para dizer o valor
   do imc;
*/
class carro {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc() {
       return this.peso / (this.altura * this.altura);
    }
}
const jose = new Pessoa('jose', 70, 1.75);
console.log(jose);




