class Carro {
  private modelo: string;
  private numeroDePortas: number;
  private velocidade: number = 0;

  constructor(modelo: string, numeroDePortas: number) {
    this.modelo = modelo;
    this.numeroDePortas = numeroDePortas;
  }

  public acelerar(): void {
    this.velocidade = this.velocidade + 10;
  }

  public parar(): void {
    this.velocidade = 0;
  }

  public velocidadeAtual(): number {
    return this.velocidade;
  }
}

class Concessionaria {
  private endereco: string;
  private listaDeCarros: Array<Carro>;

  constructor(endereco: string, listaDeCarros: Array<Carro>) {
    this.endereco = endereco;
    this.listaDeCarros = listaDeCarros;
  }

  public fornecerEndereco(): string {
    return this.endereco;
  }

  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros;
  }
}

class Pessoa {
  private nome: string;
  private carroPreferido: string;
  private carro: any;

  constructor(nome: string, carroPreferido: string) {
    this.nome = nome;
    this.carroPreferido = carroPreferido;
  }

  public dizerNome(): string {
    return this.nome;
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido;
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro;
  }

  public dizerQueCarroTem(): Carro {
    return this.carro;
  }
}

// Criar carros
let carroA = new Carro("Gol", 4);
let carroB = new Carro("Palio", 4);
let carroC = new Carro("Camaro", 2);

// Montar lista de carros da concessionaria
let listaDeCarro: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("Rua Logo Ali", listaDeCarro);

// Exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros());

// Comprar um carro
let cliente = new Pessoa("Rafael", "Gol");
console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if (carro["modelo"] == cliente.dizerCarroPreferido()) {
    cliente.comprarCarro(carro);
  }
});

console.log(cliente.dizerQueCarroTem());
