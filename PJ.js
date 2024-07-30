"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PJ = void 0;
var PJ = /** @class */ (function () {
    function PJ(nomeTitular, cnpj, senha, numeroConta, saldo) {
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
    PJ.prototype.saque = function (contasFisicas, indice, valor) {
        if (contasFisicas[indice].saldo > valor) {
            contasFisicas[indice].saldo = contasFisicas[indice].saldo - valor;
        }
        else {
            console.log("\nSaldo insuficiente\n");
        }
    };
    PJ.prototype.deposito = function (contasPF, indice, valor) {
        if (!isNaN(valor) && valor > 0 && contasPF[indice]) {
            contasPF[indice].saldo += valor;
        }
        else {
            console.log("Depósito Inválido");
        }
    };
    PJ.prototype.infoPF = function () {
        console.log("-------------------");
        console.log("Nome: ".concat(this._nomeTitular));
        console.log("Saldo: ".concat(this._saldo));
        console.log("N\u00FAmero Conta: ".concat(this._numeroConta));
    };
    return PJ;
}());
exports.PJ = PJ;
