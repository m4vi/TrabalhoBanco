export class PJ{
    private _nomePJ: string;
    private _cnpj: number;       
    private _senhaPJ: number;
    private _numeroContaPJ: number;
    private _saldoPJ: number;
    
    constructor (nomePJ: string, cnpj: number, senhaPJ: number, numeroContaPJ: number, saldoPJ: number) 
    {
        this._nomePJ = nomePJ;
        this._cnpj = cnpj;
        this._senhaPJ = senhaPJ;
        this._numeroContaPJ = numeroContaPJ;
        this._saldoPJ = saldoPJ;
    }

    get nomePJ(){
        return this._nomePJ;
    }
    set nomePJ(nomePJ: string){
        this._nomePJ = nomePJ;
    }
    get cnpj(){
        return this._cnpj;
    }
    set cnpj(cnpj: number){
        this._cnpj = cnpj;
    }
    get senhaPJ(){
        return this._senhaPJ;
    }
    set senhaPJ(senhaPJ: number){
        this._senhaPJ = senhaPJ;
    }
    get numeroContaPJ(){
        return this._numeroContaPJ;
    }
    set numeroContaPJ(numeroContaPJ: number){
        this._numeroContaPJ = numeroContaPJ;
    }
    get saldoPJ(){
        return this._saldoPJ;
    }
    set saldoPJ(saldoPJ: number){
        this.saldoPJ;
    }

    public saque(contasPJ[]:PJ, indice:number, valor:number){
        if(valor < contasPJ[indice].saldo){
            contasPJ[indice].saldo -= valor;
        } else{
            console.log("Saque não autorizado"); 
        }
    }

    public deposito(contasPJ[]:PJ, indice:number, valor:number){
        if(!isNaN(valor && valor > 0 && contasPJ[indice])){
            contasPJ[indice].saldo += valor;
        } else{
            console.log("Depósito não autorizado");
            
        }
    }

    infoPJ(){
        console.log("-------------------");
        console.log(`Nome: ${this._nomePJ}`);
        console.log(`Saldo: ${this._saldoPJ}`);
        console.log(`Número Conta: ${this._numeroContaPJ}`);
        
    }

}