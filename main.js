"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync")); // importa um módulo que captura entradas do usuário
var PF_1 = require("./PF");
var PJ_1 = require("./PJ");
var Gerente_1 = require("./Gerente");
var prompt = (0, prompt_sync_1.default)(); // cria uma instância do prompt-sync
//! Declaração de variáveis
var arraycontasPF = [];
var arraycontasPJ = [];
var arrayGerentes = [];
var valorTransferecia = 0;
var tipoConta = '\0';
var indiceConta = 0;
var indiceUsuarioMembro = 0;
//! Criação de usuários
var user1 = new PJ_1.PJ("Mao Tse Tung", 12345678912345, 1234, 1, 850);
var user2 = new PJ_1.PJ("JK Kennedy", 10203040506070, 4321, 2, 1345);
var user3 = new PF_1.PF("Jucelino Cu de Cheque", 11223344556, 1111, 3, 31000);
var user4 = new PF_1.PF("Che Quer vara", 99887766554, 2222, 4, 120);
var user5 = new Gerente_1.Gerente("Pintoncio da silva", "pindamonhaga@asp.com.br", 12345678, 40028922, [], []);
var user6 = new Gerente_1.Gerente("Antoncio da silva", "ndamonhaga@asp.com.br", 32345678, 40028923, [], []);
arraycontasPJ.push(user1, user2);
arraycontasPF.push(user3, user4);
arrayGerentes.push(user5, user6);
user5.adicionarContaPJ(user1);
user5.adicionarContaPF(user3);
//! Função login de membros
function acessoMembros() {
    do {
        var usuario = prompt("Digite seu email: ");
        var senha = parseInt(prompt("Digite sua senha: "));
        var procuraConta = function (email, arrayGerentes) {
            return arrayGerentes.findIndex(function (gerente) { return gerente.getEmail() === email; });
        };
        indiceUsuarioMembro = procuraConta(usuario, arrayGerentes);
        if (indiceUsuarioMembro === -1 || arrayGerentes[indiceUsuarioMembro].getSenha() !== senha) {
            continue;
        }
        break;
    } while (true);
}
<<<<<<< Updated upstream
//! Função de login de clientes
function login() {
=======
// Função de login
function login(arraycontasPF, arraycontasPJ) {
>>>>>>> Stashed changes
    do {
        var usuario = parseInt(prompt("Digite o CPF ou CNPJ sem ponto ou traço: "));
        var tamanho = usuario.toString().length;
        if (tamanho == 11) {
            tipoConta = "PF";
            var procuraConta = function (cpf, arraycontas) {
                return arraycontas.findIndex(function (PF) { return PF.cpf === cpf; });
            };
            indiceConta = procuraConta(usuario, arraycontasPF);
            if (indiceConta === -1) {
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
            if (indiceConta === -1) {
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
<<<<<<< Updated upstream
//! Função menu de membros
function menuMembros() {
    var escolha = -1;
    var deleta = 0;
    var tamanhoDelete = 0;
    var indiceDelete = 0;
    do {
        console.log("----------------------------\n" +
            "| 1 Criar conta\n" +
            "| 2 Adicionar conta aos cuidados\n" +
            "| 3 Extrato de cliente\n" +
            "| 4 Listar clientes\n" +
            "| 5 Excluir conta\n" +
            "| 0 Voltar\n" +
            "----------------------------");
        escolha = +prompt('Escolha: >> ');
        switch (escolha) {
            case 1:
                //criação de conta aqui
                break;
            case 2:
                //adicionar conta aqui
                break;
            case 3:
                deleta = +prompt("Digite o número da conta que deseja remover");
                tamanhoDelete = deleta.toString().length;
                if (tamanhoDelete == 11) {
                    var procuraContaPF = function (numConta, arraycontas) {
                        return arraycontas.findIndex(function (PF) { return PF.numeroConta === numConta; });
                    };
                    indiceDelete = procuraContaPF(deleta, arraycontasPF);
                    if (indiceDelete === -1) {
                        console.log("\nConta não existente, operação reiniciada\n");
                        continue;
                    }
                    // TODO: Adicionar a função de extrato aqui
                }
                else if (tamanhoDelete == 14) {
                    var procuraContaPJ = function (numConta, arraycontas) {
                        return arraycontas.findIndex(function (PJ) { return PJ.numeroConta === numConta; });
                    };
                    indiceDelete = procuraContaPJ(deleta, arraycontasPJ);
                    if (indiceDelete === -1) {
                        console.log("\nConta não existente, operação reiniciada\n");
                        continue;
                    }
                    // TODO: Adicionar a função de extrato aqui
                }
                break;
            case 4:
                arrayGerentes[indiceUsuarioMembro].listarContasPJ();
                arrayGerentes[indiceUsuarioMembro].listarContasPF();
                break;
            case 5:
                deleta = +prompt("Digite o número da conta que deseja remover");
                tamanhoDelete = deleta.toString().length;
                if (tamanhoDelete == 11) {
                    var procuraContaPF = function (numConta, arraycontas) {
                        return arraycontas.findIndex(function (PF) { return PF.numeroConta === numConta; });
                    };
                    indiceDelete = procuraContaPF(deleta, arraycontasPF);
                    if (indiceDelete === -1) {
                        console.log("\nConta não existente, operação reiniciada\n");
                        continue;
                    }
                    // TODO: Adicionar a função de remover aqui
                }
                else if (tamanhoDelete == 14) {
                    var procuraContaPJ = function (numConta, arraycontas) {
                        return arraycontas.findIndex(function (PJ) { return PJ.numeroConta === numConta; });
                    };
                    indiceDelete = procuraContaPJ(deleta, arraycontasPJ);
                    if (indiceDelete === -1) {
                        console.log("\nConta não existente, operação reiniciada\n");
                        continue;
                    }
                    // TODO: Adicionar a função de remover aqui
                }
                break;
            case 0:
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    } while (escolha !== 0);
}
//! Função menu de clientes
function menuClientes() {
    var escolha = -1;
=======
//! Declaração de variáveis
var arraycontasPF = [];
var arraycontasPJ = [];
var arrayGerentes = [];
var tipoConta = '\0';
var indiceConta = 0;
var valorTransferecia = 0;
//! Criação de usuários
var user1 = new PJ_1.PJ("Mao Tse Tung", 12345678912345, 1234, 1, 850);
var user2 = new PJ_1.PJ("JK Kennedy", 10203040506070, 4321, 2, 1345);
var user3 = new PF_1.PF("Jucelino Cu de Cheque", 11223344556, 1111, 3, 31000);
var user4 = new PF_1.PF("Che Quer vara", 99887766554, 2222, 4, 120);
var user5 = new newGerente_1.default("Pintoncio da silva", "pindamonhaga@asp.com.br", 12345678, 40028922);
var user6 = new newGerente_1.default("ntoncio da silva", "ndamonhaga@asp.com.br", 32345678, 40028923);
arraycontasPJ.push(user1, user2);
arraycontasPF.push(user3, user4);
arrayGerentes.push(user5, user6);
var user5 = new newGerente_1.default("Pintoncio da silva", "pindamonhaga@asp.com.br", 12345678, 40028922);
//------------------------------------------------------------//
//! Menu principal
var escolha1;
var escolha;
// user5.adicionarContaPJ(user2);
//------------------------------------------------------------//
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
    //! Menu secundário
>>>>>>> Stashed changes
    do {
        console.log("----------------------------\n" +
            "| 1 Sacar dinheiro\n" +
            "| 2 Depositar\n" +
            "| 3 Extrato\n" +
            "| 4 Transferencia\n" +
            "| 5 Simular emprestimo\n" +
            "| 0 Voltar\n" +
            "----------------------------");
        escolha = +prompt('Escolha: >> ');
        switch (escolha) {
            case 1:
                //! Saque
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
                //! Depositar
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
                //! Extrato
                if (tipoConta === "PF") {
                    arraycontasPF[indiceConta].infoPF(arraycontasPF, indiceConta);
                }
                else if (tipoConta === "PJ") {
                    arraycontasPJ[indiceConta].infoPJ(arraycontasPJ, indiceConta);
                }
                break;
            case 4:
                //! Transferência
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
                        if (indiceContaRecebe === -1) {
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
                        if (indiceContaRecebe === -1) {
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
                        console.log("\nCPF ou CNPJ inválido\n");
                        continue;
                    }
                    break;
                } while (true);
                break;
            case 5:
                //! Simulação de empréstimo
                if (tipoConta === "PF") {
                    var parcelas = void 0;
                    var pedido = void 0;
                    pedido = +prompt("Digite o valor a ser simulado >> ");
                    parcelas = +prompt("Digite quantas parcelas >> ");
                    arraycontasPF[indiceConta].emprestimoPF(arraycontasPF, indiceConta, pedido, parcelas);
                }
                else if (tipoConta === "PJ") {
                    var parcelas = void 0;
                    var pedido = void 0;
                    pedido = +prompt("Digite o valor a ser simulado >> ");
                    parcelas = +prompt("Digite quantas parcelas >> ");
                    arraycontasPJ[indiceConta].emprestimoPJ(arraycontasPJ, indiceConta, pedido, parcelas);
                }
                break;
            case 0:
                break;
            default:
                console.log("Opção inválida");
                break;
        }
    } while (escolha !== 0);
}
//! Menu principal
var escolha1;
do {
    console.log("-------------------------------------\n" +
        "|  Bem vindo ao Banco Aspili Getas  |\n" +
        "|  1 Login Cliente\n" +
        "|  2 Sou Gerente\n" +
        "|  0 Sair\n");
    escolha1 = +prompt("Digite a opção desejada: ");
    if (escolha1 === 1) {
        login();
        menuClientes();
    }
    else if (escolha1 === 2) {
        acessoMembros();
        menuMembros();
    }
    else if (escolha1 === 0) {
        process.exit(0); // encerra o processo com código de status 0
    }
    else {
        console.log("\nFizeste cagada colega\n");
    }
} while (true);
