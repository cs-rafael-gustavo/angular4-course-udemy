import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";

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
let cliente = new Pessoa("Rafael", "Ferrari");
console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
  if (carro["modelo"] == cliente.dizerCarroPreferido()) {
    cliente.comprarCarro(carro);
  } else {
    console.log(
      `Modelo ${cliente.dizerCarroPreferido()} não encontrado na Concessionária`
    );
  }
});

console.log(cliente.dizerQueCarroTem());
