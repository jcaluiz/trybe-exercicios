export default class Cliente {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    get getName(): string {
        return this._nome;
    }
}