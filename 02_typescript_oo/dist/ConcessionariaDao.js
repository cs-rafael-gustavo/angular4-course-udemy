"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = "tb_concessionaria";
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log("Lógica de Inserir");
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log("Lógica de Atualizar");
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log("L\u00F3gica de Remover - ID: " + id);
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log("Lógica de Selecionar");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log("Lógica de Selecionar Todos");
        return [new Concessionaria_1.default("", [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
