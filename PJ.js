"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PJ = void 0;
var PJ = /** @class */ (function () {
    function PJ(nomeTitular, cnpj, senha, numeroConta, saldo) {
        this._extratoSaque = [];
        this._extratoDeposito = [];
        this._nomeTitular = nomeTitular;
        this._cnpj = cnpj;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }
    Object.defineProperty(PJ.prototype, "nomeTitular", {
        get: function () {
            return this._nomeTitular;
        },
        set: function (nomeTitular) {
            this._nomeTitular = nomeTitular;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PJ.prototype, "cnpj", {
        get: function () {
            return this._cnpj;
        },
        set: function (cnpj) {
            this._cnpj = cnpj;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PJ.prototype, "senha", {
        get: function () {
            return this._senha;
        },
        set: function (senha) {
            this._senha = senha;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PJ.prototype, "numeroConta", {
        get: function () {
            return this._numeroConta;
        },
        set: function (numeroConta) {
            this._numeroConta = numeroConta;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PJ.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (saldo) {
            this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    PJ.prototype.saque = function (contasJuridicas, indice, valor) {
        if (contasJuridicas[indice].saldo >= valor) {
            contasJuridicas[indice].saldo -= valor;
            contasJuridicas[indice]._extratoSaque.push(valor);
        }
        else {
            console.log("\nSaldo insuficiente\n");
        }
    };
    PJ.prototype.deposito = function (contasPJ, indice, valor) {
        if (!isNaN(valor) && valor > 0 && contasPJ[indice]) {
            contasPJ[indice].saldo += valor;
            contasPJ[indice]._extratoDeposito.push(valor);
        }
        else {
            console.log("Depósito Inválido");
        }
    };
    PJ.prototype.infoPJ = function (contasPJ, indice) {
        console.log("-------------------");
        console.log("Nome: ".concat(contasPJ[indice].nomeTitular));
        console.log("Saldo: ".concat(contasPJ[indice].saldo));
        console.log("N\u00FAmero Conta: ".concat(contasPJ[indice].numeroConta));
        console.log("Saques Realizados:");
        contasPJ[indice]._extratoSaque.forEach(function (valor, index) {
            console.log("Saque ".concat(index + 1, ": ").concat(valor));
        });
        console.log("Depósitos Realizados:");
        contasPJ[indice]._extratoDeposito.forEach(function (valor, index) {
            console.log("Dep\u00F3sito ".concat(index + 1, ": ").concat(valor));
        });
    };
    return PJ;
}());
exports.PJ = PJ;
