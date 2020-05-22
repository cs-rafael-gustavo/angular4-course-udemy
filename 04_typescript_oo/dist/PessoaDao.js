"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = "tb_pessoa";
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log("Lógica de Inserir");
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log("Lógica de Atualizar");
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log("L\u00F3gica de Remover - ID: " + id);
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log("Lógica de Selecionar");
        return new Pessoa_1.default("", "");
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log("Lógica de Selecionar Todos");
        return [new Pessoa_1.default("", "")];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
