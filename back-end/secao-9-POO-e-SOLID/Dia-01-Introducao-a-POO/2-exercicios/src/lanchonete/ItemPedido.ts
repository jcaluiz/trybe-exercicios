export default abstract class ItemPedido {
    private _nomePedido: string;
    private _preco: number;
    private _listaNomePedido: string[] = [];
    private _listaPreco: number[] = [];

    constructor(nomePedido: string, preco: number) {
        this._nomePedido = nomePedido;
        this._preco = preco;
        this._listaNomePedido.push(nomePedido);
        this._listaPreco.push(preco);
    }

    listaPreco(): number[] {
        return this._listaPreco;
    }

    lista(): object {
        return {
            listaPedido: this._listaNomePedido,
            listaPreco: this._listaPreco,
        }
    }
}