<<<<<<< HEAD


//PF



//-------------------------------------------------------------------------------------------------//

//PJ


    
import { PJ } from "./PJ";
import { PF } from "./PF";    



export class Gerente{
    private _nome: string;
    private _email: string;
    private _senha: number;
    private _numeroContato: number;
    private _contasPF: PF[];
    private _contasPJ: PJ[];

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

    public adicionarContaPF(numeroConta: number): void {
        this._contasPF.push(numeroConta);
    }

    public getContaPJ(numeroConta: number): number {
        return this._contasPF[numeroConta];
    }

    public adicionarContaPJ(numeroConta: number): void {
        this._contasPJ.push(numeroConta);
    }
    
    
    // VERSÃO ADPATADA DO PROFESSOR: TESTAR!
    removerContaPF(contasPF: PF){
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
    /* Versão Chat GPT
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
    }*/

}
