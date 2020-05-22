"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
    }
    Dao.prototype.inserir = function (object) {
        console.log("Lógica de Inserir");
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log("Lógica de Atualizar");
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log("L\u00F3gica de Remover - ID: " + id);
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log("Lógica de Selecionar");
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log("Lógica de Selecionar Todos");
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
