export interface Movimentacao{
    id: number,
    tipo: string,
    produtoId: number,
    quantidade: number,
    dataMovimentacao: Date,
    valorTotal: number

}