import {PF} from "./PF";
import {PJ} from "./PJ";

export default class Gerente{
    private _nome: string;
    private _email: string;
    private _senha: number;
    private _numeroContato: number;
    private _contasPF: PF[]=[];
    private _contasPJ: PJ[]=[];

    constructor(nome: string, email: string, senha: number, numeroContato: number){
        this._nome = nome;
        this._email = email;
        this._senha = senha;
        this._numeroContato = numeroContato;
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


}

export {};

