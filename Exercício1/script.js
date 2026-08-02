//Crie um sistema para cadastrar funcionários de uma empresa.

// Classe Funcionario
class Funcionario {
    #salario;

    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.#salario = salario;
    }

    apresentar() {
        console.log("Nome: " + this.nome);
        console.log("Cargo: " + this.cargo);
    }

    calcularBonus() {
        return this.#salario * 0.10;
    }

    verSalario() {
        return this.#salario;
    }

    aumentarSalario(valor) {
        this.#salario += valor;
    }
}

// Classe Desenvolvedor
class Desenvolvedor extends Funcionario {
    constructor(nome, cargo, salario, linguagem) {
        super(nome, cargo, salario);
        this.linguagem = linguagem;
    }

    apresentar() {
        super.apresentar();
        console.log("Linguagem: " + this.linguagem);
    }

    calcularBonus() {
        return this.verSalario() * 0.20;
    }
}

// Classe Designer
class Designer extends Funcionario {
    constructor(nome, cargo, salario, ferramenta) {
        super(nome, cargo, salario);
        this.ferramenta = ferramenta;
    }

    apresentar() {
        super.apresentar();
        console.log("Ferramenta: " + this.ferramenta);
    }

    calcularBonus() {
        return this.verSalario() * 0.15;
    }
}

// Criando os objetos
let desenvolvedor = new Desenvolvedor(
    "João",
    "Desenvolvedor Front-end",
    5000,
    "JavaScript"
);

let designer = new Designer(
    "Maria",
    "Designer UI/UX",
    4500,
    "Figma"
);

// Exibindo os dados
desenvolvedor.apresentar();
console.log("Salário: R$ " + desenvolvedor.verSalario());
console.log("Bônus: R$ " + desenvolvedor.calcularBonus());

designer.apresentar();
console.log("Salário: R$ " + designer.verSalario());
console.log("Bônus: R$ " + designer.calcularBonus());