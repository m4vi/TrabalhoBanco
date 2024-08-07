"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importações
var prompt_sync_1 = __importDefault(require("prompt-sync")); //importa um módulo que captura entradas do usuário
var PF_1 = require("./PF");
var PJ_1 = require("./PJ");
//import {Gerente} from "./Gerente";
var prompt = (0, prompt_sync_1.default)(); //cria uma instancia do prompt-sync
function cadastro() {
}
function login(arraycontasPF, arraycontasPJ) {
    do {
        var usuario = parseInt(prompt("Digite o CPF ou CNPJ sem ponto ou traço: "));
        var tamanho = usuario.toString().length;
        if (tamanho == 11) {
            tipoConta = "PF";
            var procuraConta = function (cpf, arraycontas) {
                return arraycontas.findIndex(function (PF) { return PF.cpf === cpf; });
            };
            indiceConta = procuraConta(usuario, arraycontasPF);
            if (indiceConta == -1) {
                console.log("\nConta não existente\n");
                continue;
            }
            else {
                var inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPF[indiceConta].senha !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }
        }
        else if (tamanho == 14) {
            tipoConta = "PJ";
            var procuraConta = function (cnpj, arraycontas) {
                return arraycontas.findIndex(function (PJ) { return PJ.cnpj === cnpj; });
            };
            indiceConta = procuraConta(usuario, arraycontasPJ);
            if (indiceConta == -1) {
                console.log("\nConta não existente\n");
                continue;
            }
            else {
                var inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPJ[indiceConta].senha !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }
        }
        else {
            console.log("\nCPF ou CNPJ inválido\n");
            continue;
        }
        break;
    } while (true);
}
//main
var arraycontasPF = [];
var arraycontasPJ = [];
var tipoConta = '\0';
var indiceConta;
//------------------------------------------------------------//
var user1 = new PJ_1.PJ("Mao Tse Tung", 12345678912345, 1234, 1, 850);
var user2 = new PJ_1.PJ("JK Kennedy", 10203040506070, 4321, 2, 1345);
var user3 = new PF_1.PF("Jucelino Cu de Cheque", 11223344556, 1111, 3, 31000);
var user4 = new PF_1.PF("Che Quer vara", 99887766554, 2222, 4, 120);
console.log(user1);
console.log(user4);
//lembrar usar push
arraycontasPF.push(user3, user4);
arraycontasPJ.push(user1, user2);
//------------------------------------------------------------//
do {
    console.log("-------------------------------------\n" +
        "|  Bem vindo ao Banco Aspili Getas  |\n" +
        "|  1 Cadastrar\n" +
        "|  2 Login\n" +
        "|  0 Sair");
    var escolha1 = parseInt(prompt("Digite a opção desejada: "));
    if (escolha1 === 1) {
        cadastro();
        break;
    }
    else if (escolha1 === 2) {
        login(arraycontasPF, arraycontasPJ);
        break;
    }
    else if (escolha1 === 0) {
        process.exit(0); // encerra o processo com código de status 0
    }
    else {
        console.log("\nFizeste cagada colega\n");
    }
} while (true);
