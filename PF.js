"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PF = void 0;
var PF = /** @class */ (function () {
    function PF(nomeTitular, cpf, senha, numeroConta, saldo) {
        this._extratoSaque = [];
        this._extratoDeposito = [];
        this._nomeTitular = nomeTitular;
        this._cpf = cpf;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }
    Object.defineProperty(PF.prototype, "nomeTitular", {
        get: function () {
            return this._nomeTitular;
        },
        set: function (nomeTitular) {
            this._nomeTitular = nomeTitular;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PF.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PF.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (senha) {
            this._senha = senha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PF.prototype, "numeroConta", {
        get: function () {
            return this._numeroConta;
        },
        set: function (numeroConta) {
            this._numeroConta = numeroConta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PF.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (saldo) {
            this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    PF.prototype.saque = function (contasFisicas, indice, valor) {
        if (contasFisicas[indice].saldo >= valor) {
            contasFisicas[indice].saldo -= valor;
            contasFisicas[indice]._extratoSaque.push(valor);
        }
        else {
            console.log("\nSaldo insuficiente\n");
        }
    };
    PF.prototype.deposito = function (contasPF, indice, valor) {
        if (!isNaN(valor) && valor > 0 && contasPF[indice]) {
            contasPF[indice].saldo += valor;
            contasPF[indice]._extratoDeposito.push(valor);
        }
        else {
            console.log("Depósito Inválido");
        }
    };
    PF.prototype.infoPF = function (contasPF, indice) {
        console.log("-------------------");
        console.log("Nome: ".concat(contasPF[indice].nomeTitular));
        console.log("Saldo: ".concat(contasPF[indice].saldo));
        console.log("N\u00FAmero Conta: ".concat(contasPF[indice].numeroConta));
        console.log("Saques Realizados:");
        contasPF[indice]._extratoSaque.forEach(function (valor, index) {
            console.log("Saque ".concat(index + 1, ": ").concat(valor));
        });
        console.log("Depósitos Realizados:");
        contasPF[indice]._extratoDeposito.forEach(function (valor, index) {
            console.log("Dep\u00F3sito ".concat(index + 1, ": ").concat(valor));
        });
    };
    return PF;
}());
exports.PF = PF;
