"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importações
var prompt_sync_1 = __importDefault(require("prompt-sync")); //importa um módulo que captura entradas do usuário
var PF_1 = require("./PF");
var PJ_1 = require("./PJ");
var newGerente_1 = __importDefault(require("./newGerente"));
var prompt = (0, prompt_sync_1.default)(); //cria uma instancia do prompt-sync
function acessoMembros(arrayGerentes) {
    do {
        var usuario = prompt("Digite seu email: ");
        var tamanho = usuario.length;
        var senha = parseInt(prompt("Digite sua senha: "));
        var procuraConta = function (email, arrayGerentes) {
            return arrayGerentes.findIndex(function (gerente) { return gerente.getEmail() === email; });
        };
        indiceUsuarioMembro = procuraConta(usuario, arrayGerentes);
        console.log(arrayGerentes[indiceUsuarioMembro]);
        var inputSenha = parseInt(prompt("Senha da conta: "));
        if (arrayGerentes[indiceUsuarioMembro].getSenha() !== inputSenha || indiceUsuarioMembro == -1) {
            console.log("\nUsuário ou senha inválidos, operação reiniciada\n");
            continue;
        }
        break;
    } while (true);
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
var arrayGerentes = [];
//------------------------------------------------------------//
var tipoConta = '\0';
var indiceConta = 0;
var indiceUsuarioMembro = 0;
var valorTransferecia = 0;
//------------------------------------------------------------//
var user1 = new PJ_1.PJ("Mao Tse Tung", 12345678912345, 1234, 1, 850);
var user2 = new PJ_1.PJ("JK Kennedy", 10203040506070, 4321, 2, 1345);
var user3 = new PF_1.PF("Jucelino Cu de Cheque", 11223344556, 1111, 3, 31000);
var user4 = new PF_1.PF("Che Quer vara", 99887766554, 2222, 4, 120);
var user5 = new newGerente_1.default("Pintoncio da silva", "pindamonhaga@asp.com.br", 12345678, 40028922);
//------------------------------------------------------------//
arraycontasPJ.push(user1, user2);
arraycontasPF.push(user3, user4);
arrayGerentes.push(user5);
//------------------------------------------------------------//
var escolha1;
var escolha;
do {
    console.log("-------------------------------------\n" +
        "|  Bem vindo ao Banco Aspili Getas  |\n" +
        "|  1 Login\n" +
        "|  2 Sou membro\n" +
        "|  0 Sair\n");
    escolha1 = +prompt("Digite a opção desejada: ");
    if (escolha1 === 1) {
        login(arraycontasPF, arraycontasPJ);
    }
    else if (escolha1 === 2) {
        acessoMembros(arrayGerentes);
    }
    else if (escolha1 === 0) {
        process.exit(0); // encerra o processo com código de status 0
    }
    else {
        console.log("\nFizeste cagada colega\n");
    }
    do {
        console.log("----------------------------\n" +
            "| 1 Sacar dinheiro\n" +
            "| 2 Depositar\n" +
            "| 3 Extrato\n" +
            "| 4 Transferencia\n" +
            "| 5 Emprestimo\n" +
            "| 6 Excluir conta\n" +
            "| 0 Voltar\n" +
            "----------------------------");
        escolha = +prompt('Escolha: >> ');
        switch (escolha) {
            case 1:
                //saque
                if (tipoConta === "PF") {
                    var valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorSaque);
                }
                else if (tipoConta === "PJ") {
                    var valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorSaque);
                }
                break;
            case 2:
                //depositar
                if (tipoConta === "PF") {
                    var valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPF[indiceConta].deposito(arraycontasPF, indiceConta, valorDeposito);
                }
                else if (tipoConta === "PJ") {
                    var valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPJ[indiceConta].deposito(arraycontasPJ, indiceConta, valorDeposito);
                }
                break;
            case 3:
                //extrato
                if (tipoConta === "PF") {
                    arraycontasPF[indiceConta].infoPF(arraycontasPF, indiceConta);
                    //infoPF(contasPF:PF[],indice:number)
                }
                else if (tipoConta === "PJ") {
                    arraycontasPJ[indiceConta].infoPJ(arraycontasPJ, indiceConta);
                }
                break;
            case 4:
                //transferencia
                var indiceContaRecebe = 0;
                do {
                    indiceContaRecebe = 0;
                    var recebeTransferencia = +(prompt("Digite o pix da conta destinatária: "));
                    var tamanhoRecebeTransferencia = recebeTransferencia.toString().length;
                    if (tamanhoRecebeTransferencia === 11) {
                        var procuraConta = function (cpf, arraycontas) {
                            return arraycontas.findIndex(function (PF) { return PF.cpf === cpf; });
                        };
                        indiceContaRecebe = procuraConta(recebeTransferencia, arraycontasPF);
                        if (indiceConta == -1) {
                            console.log("\nConta não existente\n");
                            continue;
                        }
                        valorTransferecia = parseInt(prompt("Digite o valor: "));
                        if (valorTransferecia <= 0) {
                            console.log("\nValor não correspondente\n");
                        }
                        if (tipoConta === "PF") {
                            arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorTransferecia);
                        }
                        else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorTransferecia);
                        }
                        arraycontasPF[indiceContaRecebe].deposito(arraycontasPF, indiceContaRecebe, valorTransferecia);
                    }
                    else if (tamanhoRecebeTransferencia === 14) {
                        var procuraConta = function (cnpj, arraycontas) {
                            return arraycontas.findIndex(function (PJ) { return PJ.cnpj === cnpj; });
                        };
                        indiceContaRecebe = procuraConta(recebeTransferencia, arraycontasPJ);
                        if (indiceConta == -1) {
                            console.log("\nConta não existente\n");
                            continue;
                        }
                        valorTransferecia = parseInt(prompt("Digite o valor: "));
                        if (valorTransferecia <= 0) {
                            console.log("\nValor não correspondente\n");
                        }
                        if (tipoConta === "PF") {
                            arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorTransferecia);
                        }
                        else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorTransferecia);
                        }
                        arraycontasPJ[indiceContaRecebe].deposito(arraycontasPJ, indiceContaRecebe, valorTransferecia);
                    }
                    else {
                        console.log("\nFizeste cagada\n");
                        continue;
                    }
                    break;
                } while (true);
                break;
            case 5:
                //emprestimo
                if (tipoConta === "PF") {
                }
                else if (tipoConta === "PJ") {
                }
                break;
            case 6:
                //excluir
                if (tipoConta === "PF") {
                }
                else if (tipoConta === "PJ") {
                }
                break;
            case 0:
                break;
            default:
                console.log("Comando invalido, tente novamente");
                break;
        }
    } while (escolha != 0);
} while (escolha1 != 0);
