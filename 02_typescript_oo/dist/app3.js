"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = __importDefault(require("./carro"));
var moto_1 = __importDefault(require("./moto"));
var carro = new carro_1.default("Punto", 4);
carro.acelerar();
carro.acelerar();
var moto = new moto_1.default();
moto.acelerar();
moto.acelerar();
console.log(carro);
console.log(moto);
