

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

export class Gerente{
    private _nome: string;
    private _email: string;
    private _senha: number;
    private _numeroContato: number;
    private _contasPF: PF[];
    private _contasPF: PJ[];

    constructor(nome: string, email: string, senha: number, numeroContato: number, contasPF: number[]){
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._numeroContato = numeroContato;
        this._contasPF = contasPF;
    }

    public getNome(): string{
        return this._nome;
    }

    public setNome(nome: string): void {
        this._nome = nome;
    }

    public getEmail(): string {
        return this._email;
    }

    public setEmail(email: string): void {
        this._email = email;
    }

    public getSenha(): number {
        return this._senha;
    }

    public setSenha(senha: number): void {
        this._senha = senha;
    }

    public getNumeroContato(): number {
        return this._numeroContato;
    }

    public setNumeroContato(numeroContato: number): void {
        this._numeroContato = numeroContato;
    }

    public getContaPF(numeroConta: number): number {
        return this._contasPF[numeroConta];
    }

    public adicionarConta(numeroConta: number): void {
        this._contasPF.push(numeroConta);
    }

    public removerConta(numeroConta: number): void {
        const novoArray: number[] = [];
        for (let i = 0; i < this._contasPF.length; i++) {
            if (this._contasPF[i] !== numeroConta) {
                novoArray.push(this._contasPF[i]);
            }
        }
        this._contasPF = novoArray;
    }

}
