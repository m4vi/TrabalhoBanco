//importações
import promptSync from 'prompt-sync'; //importa um módulo que captura entradas do usuário
import {PF} from "./PF";
import {PJ} from "./PJ";
//import {Gerente} from "./Gerente";

const prompt = promptSync(); //cria uma instancia do prompt-sync

function cadastro():void{

}



function login(arraycontasPF: PF[], arraycontasPJ: PJ[]): void {
    do {
        let usuario: number = parseInt(prompt("Digite o CPF ou CNPJ sem ponto ou traço: "));
        let tamanho: number = usuario.toString().length;

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


//main

const arraycontasPF: PF[] = [];
const arraycontasPJ: PJ[] = [];
var tipoConta:string='\0';
var indiceConta:number;
//------------------------------------------------------------//

let user1: PJ = new PJ("Mao Tse Tung", 12345678912345, 1234, 1, 850);
let user2: PJ = new PJ("JK Kennedy", 10203040506070, 4321, 2, 1345);
let user3: PF = new PF("Jucelino Cu de Cheque", 11223344556, 1111, 3, 31000);
let user4: PF = new PF("Che Quer vara", 99887766554, 2222, 4, 120);

console.log(user1);
console.log(user4);
//lembrar usar push

arraycontasPF.push(user3,user4);
arraycontasPJ.push(user1,user2);

//------------------------------------------------------------//




do{

    console.log("-------------------------------------\n" +
        "|  Bem vindo ao Banco Aspili Getas  |\n" +
        "|  1 Cadastrar\n"+
        "|  2 Login\n"+
        "|  0 Sair");


    let escolha1:number=parseInt(prompt("Digite a opção desejada: "));

    if(escolha1===1){
        cadastro();
        break;
    }else if(escolha1===2) {
        login(arraycontasPF, arraycontasPJ);
        break;
    }else if(escolha1===0){
        process.exit(0); // encerra o processo com código de status 0
    }else{
        console.log("\nFizeste cagada colega\n");
    }

}while(true);

do{

    console.log("-------------------------------------\n" +
        "|  Bem vindo ao Banco Aspili Getas  |\n" +
        "|  1 Cadastrar\n"+
        "|  2 Login\n"+
        "|  0 Sair");


    let escolha1:number=parseInt(prompt("Digite a opção desejada: "));

    if(escolha1===1){
        cadastro();
        break;
    }else if(escolha1===2) {
        login(arraycontasPF, arraycontasPJ);
        break;
    }else if(escolha1===0){
        process.exit(0); // encerra o processo com código de status 0
    }else{
        console.log("\nFizeste cagada colega\n");
    }

}while(true);



let escolha: number;


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
            if(tipoConta==="PF"){
                saque(arraycontasPF,)
            }else(tipoConta==="PJ"){

        }

            break;

        case 2:
            //depositar
            if(tipoConta==="PF"){

            }else(tipoConta==="PJ"){

        }


            break;

        case 3:
            //extrato
            if(tipoConta==="PF"){

            }else(tipoConta==="PJ"){

        }


            break;

        case 4:
            //transferencia
            if(tipoConta==="PF"){

            }else(tipoConta==="PJ"){

        }


            break;

        case 5:
            //emprestimo
            if(tipoConta==="PF"){

            }else(tipoConta==="PJ"){

        }


            break;

        case 6:
            //excluir
            if(tipoConta==="PF"){

            }else(tipoConta==="PJ"){

        }


            break;

        case 0:

            break;

        default:
            console.log("Comando invalido, tente novamente");
            break;
    }

} while (true);


export {}