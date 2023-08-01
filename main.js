function carro(modelo, fabricante,anoModelo,anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroJoao = new carro("Fiesta", "Ford", 2017, 2016);
const carroEdu = new carro("Polo", "VW", 2021, 2020);

const nome = "eduardo"
const idade = 30
const eMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    eMaiorDeIdade: eMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');
pessoa['sobrenome'] = undefined;

pessoa.nome = 'Bawden';

if('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));