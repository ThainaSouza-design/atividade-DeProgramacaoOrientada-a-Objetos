//Crie um sistema de locadora de veículos.

// Classe Veiculo
class Veiculo {
    #diaria;

    constructor(marca, modelo, diaria) {
        this.marca = marca;
        this.modelo = modelo;
        this.#diaria = diaria;
    }

    descricao() {
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
    }

    calcularAluguel(dias) {
        return this.#diaria * dias;
    }

    getDiaria() {
        return this.#diaria;
    }
}

// Classe Carro
class Carro extends Veiculo {
    constructor(marca, modelo, diaria, portas) {
        super(marca, modelo, diaria);
        this.portas = portas;
    }

    descricao() {
        super.descricao();
        console.log("Portas: " + this.portas);
    }

    calcularAluguel(dias) {
        return this.getDiaria() * dias + 50;
    }
}

// Classe Moto
class Moto extends Veiculo {
    constructor(marca, modelo, diaria, cilindradas) {
        super(marca, modelo, diaria);
        this.cilindradas = cilindradas;
    }

    descricao() {
        super.descricao();
        console.log("Cilindradas: " + this.cilindradas);
    }

    calcularAluguel(dias) {
        return this.getDiaria() * dias + 20;
    }
}

// Classe Locadora
class Locadora {
    constructor() {
        this.veiculos = [];
    }

    adicionarVeiculo(veiculo) {
        this.veiculos.push(veiculo);
    }

    listarVeiculos() {
        for (let veiculo of this.veiculos) {
            veiculo.descricao();
            console.log("");
        }
    }

    calcularTotal(dias) {
        let total = 0;

        for (let veiculo of this.veiculos) {
            total += veiculo.calcularAluguel(dias);
        }

        return total;
    }

    // Desafio extra
    removerVeiculo(modelo) {
        this.veiculos = this.veiculos.filter(
            veiculo => veiculo.modelo != modelo
        );
    }
}

// Criando os veículos
let carro = new Carro("Toyota", "Corolla", 150, 4);
let moto = new Moto("Honda", "CB 500", 80, 500);

// Criando a locadora
let locadora = new Locadora();

// Adicionando veículos
locadora.adicionarVeiculo(carro);
locadora.adicionarVeiculo(moto);

// Listando veículos
locadora.listarVeiculos();

// Valor do aluguel por 3 dias
console.log("Aluguel do carro por 3 dias: R$ " + carro.calcularAluguel(3));
console.log("Aluguel da moto por 3 dias: R$ " + moto.calcularAluguel(3));

// Valor total da locadora
console.log("Total da locadora por 3 dias: R$ " + locadora.calcularTotal(3));

// Removendo um veículo (desafio extra)
locadora.removerVeiculo("Corolla");

console.log("Após remover o Corolla:");
locadora.listarVeiculos();