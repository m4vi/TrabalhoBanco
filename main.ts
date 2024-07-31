// Importações

import promptSync from 'prompt-sync'; // importa um módulo que captura entradas do usuário
import { PF } from "./PF";
import { PJ } from "./PJ";
import Gerente from "./newGerente";

const prompt = promptSync(); // cria uma instância do prompt-sync

// Função para acesso de membros

function acessoMembros(arrayGerentes: Gerente[]) {
    do {
        let usuario: string = prompt("Digite seu email: ");
        let senha: number = parseInt(prompt("Digite sua senha: "));

        const procuraConta = (email: string, arrayGerentes: Gerente[]): number => {
            return arrayGerentes.findIndex((gerente) => gerente.getEmail() === email);
        };

        let indiceUsuarioMembro = procuraConta(usuario, arrayGerentes);
        console.log(arrayGerentes[indiceUsuarioMembro]);

        let inputSenha = parseInt(prompt("Senha da conta: "));

        if (arrayGerentes[indiceUsuarioMembro].getSenha() !== inputSenha || indiceUsuarioMembro == -1) {
            console.log("\nUsuário ou senha inválidos, operação reiniciada\n");
            continue;
        }

        break;

    } while (true);
}

// Função de login

function login(arraycontasPF: PF[], arraycontasPJ: PJ[]): void {
    do {
        let usuario: number = parseInt(prompt("Digite o CPF ou CNPJ sem ponto ou traço: "));
        let tamanho: number = usuario.toString().length;
        let tipoConta: string;
        let indiceConta: number;

        if (tamanho == 11) {
            tipoConta = "PF";

            const procuraConta = (cpf: number, arraycontas: PF[]): number => {
                return arraycontas.findIndex((PF) => PF.cpf === cpf);
            };

            indiceConta = procuraConta(usuario, arraycontasPF);

            if (indiceConta == -1) {
                console.log("\nConta não existente\n");
                continue;
            } else {
                let inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPF[indiceConta].senha !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }

        } else if (tamanho == 14) {
            tipoConta = "PJ";

            const procuraConta = (cnpj: number, arraycontas: PJ[]): number => {
                return arraycontas.findIndex((PJ) => PJ.cnpj === cnpj);
            };

            indiceConta = procuraConta(usuario, arraycontasPJ);

            if (indiceConta == -1) {
                console.log("\nConta não existente\n");
                continue;
            } else {
                let inputSenha = parseInt(prompt("Senha da conta: "));
                if (arraycontasPJ[indiceConta].senha !== inputSenha) {
                    console.log("\nSenha incorreta, operação reiniciada\n");
                    continue;
                }
            }
        } else {
            console.log("\nCPF ou CNPJ inválido\n");
            continue;
        }
        break;
    } while (true);
}

//! Declaração de variáveis

const arraycontasPF: PF[] = [];
const arraycontasPJ: PJ[] = [];
const arrayGerentes: Gerente[] = [];
let tipoConta: string = '\0';
let indiceConta: number = 0;
let valorTransferecia: number = 0;

//! Criação de usuários

let user1: PJ = new PJ("Mao Tse Tung", 12345678912345, 1234, 1, 850);
let user2: PJ = new PJ("JK Kennedy", 10203040506070, 4321, 2, 1345);
let user3: PF = new PF("Jucelino Cu de Cheque", 11223344556, 1111, 3, 31000);
let user4: PF = new PF("Che Quer vara", 99887766554, 2222, 4, 120);
let user5: Gerente = new Gerente("Pintoncio da silva", "pindamonhaga@asp.com.br", 12345678, 40028922);
let user6: Gerente = new Gerente("ntoncio da silva", "ndamonhaga@asp.com.br", 32345678, 40028923);

<<<<<<< Updated upstream
arraycontasPJ.push(user1, user2);
arraycontasPF.push(user3, user4);
arrayGerentes.push(user5, user6);
=======
let user5: Gerente= new Gerente("Pintoncio da silva","pindamonhaga@asp.com.br",12345678,40028922);


//------------------------------------------------------------//
>>>>>>> Stashed changes

//! Menu principal

<<<<<<< Updated upstream
let escolha1: number;
let escolha: number;

do {
=======

// user5.adicionarContaPJ(user2);



//------------------------------------------------------------//


do{
>>>>>>> Stashed changes

    console.log("-------------------------------------\n" +
        "|  Bem vindo ao Banco Aspili Getas  |\n" +
        "|  1 Login\n" +
        "|  2 Sou membro\n" +
        "|  0 Sair\n");

    escolha1 = +prompt("Digite a opção desejada: ");

    if (escolha1 === 1) {
        login(arraycontasPF, arraycontasPJ);

    } else if (escolha1 === 2) {
        acessoMembros(arrayGerentes);
<<<<<<< Updated upstream
    } else if (escolha1 === 0) {
=======
        
    }else if(escolha1===0){
>>>>>>> Stashed changes
        process.exit(0); // encerra o processo com código de status 0
    } else {
        console.log("\nFizeste cagada colega\n");
    }

    //! Menu secundário

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
                    const valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPF[indiceConta].saque(arraycontasPF, indiceConta, valorSaque);
                } else if (tipoConta === "PJ") {
                    const valorSaque = parseFloat(prompt("Digite o valor do saque: "));
                    arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorSaque);
                }

                break;

            case 2:
                //! Depositar
                if (tipoConta === "PF") {
                    const valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPF[indiceConta].deposito(arraycontasPF, indiceConta, valorDeposito);
                } else if (tipoConta === "PJ") {
                    const valorDeposito = parseFloat(prompt("Digite o valor do deposito: "));
                    arraycontasPJ[indiceConta].deposito(arraycontasPJ, indiceConta, valorDeposito);
                }

                break;

            case 3:
                //! Extrato
                if (tipoConta === "PF") {
                    arraycontasPF[indiceConta].infoPF(arraycontasPF, indiceConta);
                } else if (tipoConta === "PJ") {
                    arraycontasPJ[indiceConta].infoPJ(arraycontasPJ, indiceConta);
                }

                break;

            case 4:
                //! Transferência
                var indiceContaRecebe: number = 0;

                do {
                    indiceContaRecebe = 0;

                    let recebeTransferencia: number = +(prompt("Digite o pix da conta destinatária: "));
                    let tamanhoRecebeTransferencia: number = recebeTransferencia.toString().length;

                    if (tamanhoRecebeTransferencia === 11) {
                        const procuraConta = (cpf: number, arraycontas: PF[]): number => {
                            return arraycontas.findIndex((PF) => PF.cpf === cpf);
                        }
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
                        } else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorTransferecia);
                        }

                        arraycontasPF[indiceContaRecebe].deposito(arraycontasPF, indiceContaRecebe, valorTransferecia);

                    } else if (tamanhoRecebeTransferencia === 14) {
                        const procuraConta = (cnpj: number, arraycontas: PJ[]): number => {
                            return arraycontas.findIndex((PJ) => PJ.cnpj === cnpj);
                        }
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
                        } else if (tipoConta === "PJ") {
                            arraycontasPJ[indiceConta].saque(arraycontasPJ, indiceConta, valorTransferecia);
                        }

                        arraycontasPJ[indiceContaRecebe].deposito(arraycontasPJ, indiceContaRecebe, valorTransferecia);
                    } else {
                        console.log("\nFizeste cagada\n");
                        continue;
                    }
                    break;
                } while (true);

                break;

            case 5:
                // Empréstimo
                if (tipoConta === "PF") {
                    let parcelas: number;
                    let pedido: number;
                    pedido = +prompt("Digite o valor a ser simulado >> ");
                    parcelas = +prompt("Digite quantas parcelas >> ");
                    arraycontasPF[indiceConta].emprestimoPF(arraycontasPF, indiceConta, pedido, parcelas);

                } else if (tipoConta === "PJ") {
                    let parcelas : number;    
                    let pedido : number;
                    pedido = +prompt("Digite o valor a ser simulado >> ");
                    parcelas = +prompt("Digite quantas parcelas >> ");
                    arraycontasPJ[indiceConta].emprestimoPJ(arraycontasPJ, indiceConta, pedido, parcelas);
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

export {}
