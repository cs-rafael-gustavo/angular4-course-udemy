"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Dao_1 = require("./Dao");
// import { ConcessionariaDao } from "./ConcessionariaDao";
// import { PessoaDao } from "./PessoaDao";
// let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
var concessionaria = new Concessionaria_1.default("", []);
// let pessoaDao: PessoaDao = new PessoaDao();
var pessoa = new Pessoa_1.default("", "");
var concessionariaDao = new Dao_1.Dao();
var pessoaDao = new Dao_1.Dao();
concessionariaDao.remover(1);
pessoaDao.remover(2);
