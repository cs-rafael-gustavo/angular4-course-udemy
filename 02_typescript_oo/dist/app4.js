"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var PessoaDao_1 = require("./PessoaDao");
var concessionariaDao = new ConcessionariaDao_1.ConcessionariaDao();
var pessoaDao = new PessoaDao_1.PessoaDao();
var concessionaria = new Concessionaria_1.default("", []);
var pessoa = new Pessoa_1.default("", "");
concessionariaDao.inserir(concessionaria);
pessoaDao.inserir(pessoa);
