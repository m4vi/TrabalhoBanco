"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gerente = /** @class */ (function () {
    function Gerente(nome, email, senha, numeroContato) {
        this._contasPF = [];
        this._contasPJ = [];
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._numeroContato = numeroContato;
    }
    Gerente.prototype.getNome = function () {
        return this._nome;
    };
    Gerente.prototype.setNome = function (nome) {
        this._nome = nome;
    };
    Gerente.prototype.getEmail = function () {
        return this._email;
    };
    Gerente.prototype.setEmail = function (email) {
        this._email = email;
    };
    Gerente.prototype.getSenha = function () {
        return this._senha;
    };
    Gerente.prototype.setSenha = function (senha) {
        this._senha = senha;
    };
    Gerente.prototype.getNumeroContato = function () {
        return this._numeroContato;
    };
    Gerente.prototype.setNumeroContato = function (numeroContato) {
        this._numeroContato = numeroContato;
    };
    return Gerente;
}());
exports.default = Gerente;
