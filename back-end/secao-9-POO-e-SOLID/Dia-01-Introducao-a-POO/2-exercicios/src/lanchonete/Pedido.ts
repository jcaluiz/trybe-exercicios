import Cliente from "./Cliente";
import IPedido from "./IPedido";
import ItemPedido from "./ItemPedido";

export default class Pedido extends Cliente {
    private _itensConsumidos: string[];
    private _formaPagamento: string;
    private _descontoPorCento?: number;

    constructor(
        nome: string,
        itensConsumidos: string[],
        formaPagamento: string,
        descontoPorCento?: number
    ) {
        super(nome);
        this._itensConsumidos = itensConsumidos;
        this._formaPagamento = formaPagamento;
        this._descontoPorCento = descontoPorCento;
    };

    totalPedido(listaPreco: number[]): void {
        const total = listaPreco.reduce((acc, curr) => acc + curr, 0);
        console.log(total);
    }

    totalPedidoComDesconto(listaPreco: number[]): void {
        const total = listaPreco.reduce((acc, curr) => acc + curr, 0);
        if (this._descontoPorCento) {
            const desconto = (total * (1 - (this._descontoPorCento / 100))).toFixed(2)
            console.log(desconto);

        }
    }
}
