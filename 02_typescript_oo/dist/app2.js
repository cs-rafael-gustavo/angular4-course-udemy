"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = __importDefault(require("./carro"));
var pessoa_1 = __importDefault(require("./pessoa"));
var concessionaria_1 = __importDefault(require("./concessionaria"));
// Criar carros
var carroA = new carro_1.default("Gol", 4);
var carroB = new carro_1.default("Palio", 4);
var carroC = new carro_1.default("Camaro", 2);
// Montar lista de carros da concessionaria
var listaDeCarro = [carroA, carroB, carroC];
var concessionaria = new concessionaria_1.default("Rua Logo Ali", listaDeCarro);
// Exibir lista de carros
console.log(concessionaria.mostrarListaDeCarros());
// Comprar um carro
var cliente = new pessoa_1.default("Rafael", "Ferrari");
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro["modelo"] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
    else {
        console.log("Modelo " + cliente.dizerCarroPreferido() + " n\u00E3o encontrado na Concession\u00E1ria");
    }
});
console.log(cliente.dizerQueCarroTem());
