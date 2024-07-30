export class PJ {
    private _nomeTitular: string;
    private _cnpj: number;
    private _senha: number;
    private _numeroConta: number;
    private _saldo: number;

    constructor(nomeTitular: string, cnpj: number, senha: number, numeroConta: number, saldo: number) {
        this._nomeTitular = nomeTitular;
        this._cnpj = cnpj;
        this._senha = senha;
        this._numeroConta = numeroConta;
        this._saldo = saldo;
    }

    get nomeTitular() {
        return this._nomeTitular;
    }

    set nomeTitular(nomeTitular: string) {
        this._nomeTitular = nomeTitular;
    }

    get cnpj() {
        return this._cnpj;
    }

    set cnpj(cnpj: number) {
        this._cnpj = cnpj;
    }

    get senha() {
        return this._senha;
    }

    set senha(senha: number) {
        this._senha = senha;
    }

    get numeroConta() {
        return this._numeroConta;
    }

    set numeroConta(numeroConta: number) {
        this._numeroConta = numeroConta;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(saldo: number) {
        this._saldo = saldo;
    }

    public saque(contasFisicas: PJ[], indice: number, valor: number) {
        if (contasFisicas[indice].saldo > valor) {
            contasFisicas[indice].saldo = contasFisicas[indice].saldo - valor;
        } else {
            console.log("\nSaldo insuficiente\n");
        }
    }

    public deposito(contasPF: PJ[], indice: number, valor: number):number {
        if (!isNaN(valor) && valor > 0 && contasPF[indice]) {
            contasPF[indice].saldo += valor;
            return contasPF[indice].saldo;
        } else {
            console.log("Depósito Inválido");
            return -1;
        }

    }

    infoPJ(contasPJ:PJ[], indice:number) {
        const saldoAtualizadoDeposito = contasPJ[indice].saldo
        const saldoAtualizadoSaque = contasPJ[indice].saldo;
        console.log("-------------------");
        console.log(`Nome: ${this._nomeTitular}`);
        console.log(`Saldo: ${this._saldo}`);
        console.log(`Número Conta: ${this._numeroConta}`);
        if(saldoAtualizadoDeposito > 0){
            return console.log(`Deposito Realizado: ${this.deposito}`);
        }

        if(saldoAtualizadoSaque > 0){
            return console.log(`Saque Realizado: ${this.saque}`);
        }
        
    }
}
export {}