"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
var Gerente = /** @class */ (function () {
    function Gerente(nome, email, senha, numeroContato, contasPJ, contasPF) {
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._numeroContato = numeroContato;
        this._contasPJ = contasPJ;
        this._contasPF = contasPF;
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
    Gerente.prototype.getContaPF = function (numeroConta) {
        return this._contasPF.find(function (conta) { return conta.numeroConta === numeroConta; });
    };
    Gerente.prototype.adicionarContaPF = function (conta) {
        this._contasPF.push(conta);
    };
    // public adicionarContaPF(numeroConta: PF) {
    //     return this._contasPF.push(numeroConta);
    // }
    // public getContaPJ(numeroConta: number) {
    //     return this._contasPF[numeroConta];
    // }
    Gerente.prototype.getContaPJ = function (numeroConta) {
        return this._contasPJ.find(function (conta) { return conta.numeroConta === numeroConta; });
    };
    Gerente.prototype.adicionarContaPJ = function (conta) {
        this._contasPJ.push(conta);
    };
    Gerente.prototype.listarContasPJ = function () {
        return this._contasPJ;
    };
    /*public adicionarContaPJ(numeroConta: PJ) {
        return this._contasPJ.push(numeroConta);
    }*/
    Gerente.prototype.removerContaPF = function (numeroConta) {
        var novoArray = [];
        for (var i = 0; i < this._contasPF.length; i++) {
            if (this._contasPF[i].numeroConta !== numeroConta) {
                novoArray.push(this._contasPF[i]);
            }
        }
        this._contasPF = novoArray;
    };
    Gerente.prototype.removerContaPJ = function (numeroConta) {
        var novoArray = [];
        for (var i = 0; i < this._contasPJ.length; i++) {
            if (this._contasPJ[i].numeroConta !== numeroConta) {
                novoArray.push(this._contasPJ[i]);
            }
        }
        this._contasPJ = novoArray;
    };
    return Gerente;
}());
exports.Gerente = Gerente;
