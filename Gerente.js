"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerente = void 0;
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
    //public adicionarContaPF(PFconta:{nomeTitular:string,cpf:number,senha:number,numeroConta:number,saldo:number,extratoSaque:number[],extratoDeposito:number}){} 
    //public adicionarContaPF(numeroConta: number): void {
    //  this._contasPF.push(numeroConta);
    //}
    Gerente.prototype.getContaPJ = function (numeroConta) {
        return this._contasPF[numeroConta];
    };
    //public adicionarContaPJ(numeroConta: number): void {
    //  this._contasPJ.push(numeroConta);
    //}
    Gerente.prototype.removerContaPF = function (numeroConta) {
        var novoArray = [];
        for (var i = 0; i < this._contasPF.length; i++) {
            if (this._contasPF[i] !== numeroConta) {
                novoArray.push(this._contasPF[i]);
            }
        }
        this._contasPF = novoArray;
    };
    Gerente.prototype.removerContaPJ = function (numeroConta) {
        var novoArray = [];
        for (var i = 0; i < this._contasPJ.length; i++) {
            if (this._contasPJ[i] !== numeroConta) {
                novoArray.push(this._contasPJ[i]);
            }
        }
        this._contasPJ = novoArray;
    };
    return Gerente;
}());
exports.Gerente = Gerente;
// VERSÃO ADPATADA DO PROFESSOR: TESTAR!
/*removerContaPF(contasPF: PF){
    let index = this._contasPF.indexOf(contasPF);
    if(index >= 0){
        this._contasPF.splice(index, 1);
    }
}
removerContapj(contasPJ: PJ){
    let index = this._contasPJ.indexOf(contasPJ);
    if(index >= 0){
        this._contasPJ.splice(index, 1);
    }
}

public removerContaPF(numeroConta: number): void {
    const novoArray: number[] = [];
    for (let i = 0; i < this._contasPF.length; i++) {
        if (this._contasPF[i] !== numeroConta) {
            novoArray.push(this._contasPF[i]);
        }
    }
    this._contasPF = novoArray;
}

public removerContaPJ(numeroConta: number): void {
    const novoArray: number[] = [];
    for (let i = 0; i < this._contasPJ.length; i++) {
        if (this._contasPJ[i] !== numeroConta) {
            novoArray.push(this._contasPJ[i]);
        }
    }
    this._contasPJ = novoArray;
}

}
*/ 
