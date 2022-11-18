export default class Estudantes {
    private _matricula: number;
    private _nome: string;
    private _notaProva: number[];
    private _notaTrabalho: number[];
    private _soma: number;
    private _quantidadeNotas: number;

    constructor(
        matricula: number,
        nome: string,
        notaProva: number[],
        notaTrabalho: number[]
    ) {
        this._matricula = matricula;
        this._nome = nome;
        this._notaProva = notaProva;
        this._notaTrabalho = notaTrabalho;
        this._soma = this._notaProva
        .reduce((acc, curr) => acc + curr, 0) + this._notaTrabalho
        .reduce((acc, curr) => acc + curr, 0);
        this._quantidadeNotas = this._notaProva.length + this._notaTrabalho.length;
    }

    somaNotas(): number {
        console.log(this._soma);
        return this._soma;
    }

    mediaNotas(): void {
        console.log(this._soma / this._quantidadeNotas)
    }
}
