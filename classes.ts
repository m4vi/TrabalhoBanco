

//PF

export class PF{
    private _nomeTitular:string;
    private _cpf:number;
    private _senha:number;
    private _numeroConta:number;
    private _saldo:number;
    
    constructor(nomeTitular:string,cpf:number, senha:number,_numeroConta:number,saldo:number){
        this._nomeTitular = nomeTitular;
        this._cpf = cpf;
        this._senha = senha;
        this._numeroConta = _numeroConta;
        this._saldo = saldo;
    }
    get nomeTitular(){
        return this._nomeTitular;
    }
    set nomeTitular(nomeTitular: string){
        this._nomeTitular = nomeTitular;
    }
    get cpf(){
        return this._cpf;
    }
    set cpf(cpf: number){
        this._cpf = cpf;
    }
    get senha(){
        return this._senha;
    }
    set senha(senha: number){
        this._senha = senha;
    }
    get numeroConta(){
        return this._numeroConta;
    }
    set numeroConta(numeroConta: number){
        this._numeroConta = numeroConta;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(saldo: number){
        this.saldo;
    }  
}

//-------------------------------------------------------------------------------------------------//

//PJ

export class PJ
{
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
        return this._nomePJ;
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
        this.saldo;
    }  
}


