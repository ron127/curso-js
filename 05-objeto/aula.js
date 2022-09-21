
class pessoa {
    nome;
    idade;
    anodenascimento;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anodenascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


const rondinelle = new pessoa('rondinlle', 44);

class pessoa {

}

console.log(rondinelle);

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const rondinelle = new Pessoa('rondinelle', 44);
const renan = new Pessoa('Renan', 30);

compararPessoas(rondinelle, renan);




