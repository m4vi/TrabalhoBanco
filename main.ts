//importações
import promptSync from 'prompt-sync'; //importa um módulo que captura entradas do usuário

const prompt = promptSync(); //cria uma instancia do prompt-sync

function cadastro():void{
    
}

function encontraIndice(){
    
}


function login(arraycontasPF:ContaPF[]):void{
    
    do{
        let usuario:number=parseInt(prompt("Digite o CPF ou CNPJ sem ponto ou traço: "));
        let tamanho:number=usuario.toString().length;

        if(tamanho==11){
            const procuraConta = (numero: number): number => {
                return arraycontasPF.findIndex((PF) => PF.numero === numero);
            };

            var indiceConta=procuraConta(usuario);
        
            if (indiceConta == -1) {
                console.log("\nConta não existente\n");
                continue;
            }else{
                let inputSenha = prompt("Senha da conta: ");
                if (arraycontasPF[indiceConta].senha !== inputSenha) {
                console.log("\nSenha incorreta, operação reiniciada\n");
                continue;
            }
            }

        }else if(tamanho==14){
            const procuraConta = (numero: number): number => {
                return arraycontasPJ.findIndex((PJ) => PJ.numero === numero);
            };

            var indiceConta=procuraConta(usuario);
        
            if (indiceConta == -1) {
                console.log("\nConta não existente\n");
                continue;
            }else{
                let inputSenha = prompt("Senha da conta: ");
                if (arraycontasPJ[indiceConta].senha !== inputSenha) {
                console.log("\nSenha incorreta, operação reiniciada\n");
                continue;
            }
        }
    }
    }while(true);
}


//main

const arraycontasPF: ContaPF[] = [];
const arraycontasPJ: ContaPJ[] = [];




do{

console.log("-------------------------------------\n" +
    "|  Bem vindo ao Banco Aspili Getas  |\n" +
    "|  1 Cadastrar\n"+
    "|  2 Login");

    
    let escolha1:number=parseInt(prompt("Digite a opção desejada: "));

    if(escolha1===1){
        cadastro();
        break;
    }else if(escolha1===2){
        login(arraycontasPF,arraycontasPJ);
        break;
    }else{
        console.log("\nFizeste cagada colega\n");
    }

}while(true);
