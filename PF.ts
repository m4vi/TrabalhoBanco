export class PF {
    private _nomeTitular: string;
    private _cpf: number;
    private _senha: number;
    private _numeroConta: number;
    private _saldo: number;
    private _extratoSaque: number[] = [];
    private _extratoDeposito: number[] = [];

    constructor(nomeTitular: string, cpf: number, senha: number, numeroConta: number, saldo: number) {
        this._nomeTitular = nomeTitular;
        this._cpf = cpf;
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

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf: number) {
        this._cpf = cpf;
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

    public saque(contasFisicas: PF[], indice: number, valor: number) {
        if (contasFisicas[indice].saldo >= valor) {
            contasFisicas[indice].saldo -= valor;
            contasFisicas[indice]._extratoSaque.push(valor);
        } else {
            console.log("\nSaldo insuficiente\n");
        }
    }

    public deposito(contasPF: PF[], indice: number, valor: number) {
        if (!isNaN(valor) && valor > 0 && contasPF[indice]) {
            contasPF[indice].saldo += valor;
            contasPF[indice]._extratoDeposito.push(valor);
        } else {
            console.log("Depósito Inválido");
        }
    }

    public infoPF(contasPF: PF[], indice: number) {
        console.log("-------------------");
        console.log(`Nome: ${contasPF[indice].nomeTitular}`);
        console.log(`Saldo: ${contasPF[indice].saldo}`);
        console.log(`Número Conta: ${contasPF[indice].numeroConta}`);

        console.log("Saques Realizados:");
        contasPF[indice]._extratoSaque.forEach((valor, index) => {
            console.log(`Saque ${index + 1}: ${valor}`);
        });

        console.log("Depósitos Realizados:");
        contasPF[indice]._extratoDeposito.forEach((valor, index) => {
            console.log(`Depósito ${index + 1}: ${valor}`);
        });
    }
}

export {};
