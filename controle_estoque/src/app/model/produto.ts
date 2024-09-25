import { at } from "ionicons/icons";
import { Categoria } from "./categoria";
import { Estoque } from "./estoque";

export class Produto{

    public id?: number;
    public nome: string;
    public codBarras: number;
    public qntEstoque: number;
    public qntMinima: number;
    public categoriaId: number;
    public categoria?: Categoria;
    public ativo: number;
    public valor: number;
    public validade: Date;
    public estoqueId: number;
    public estoque?: Estoque;

    constructor(nome: string, codBarras: number, qntEstoque: number, qntMinima: number, categoriaId: number, ativo: number, valor: number, validade: Date, estoqueId: number ){
        this.nome = nome;
        this.codBarras = codBarras;
        this.qntEstoque = qntEstoque;
        this.qntMinima = qntMinima;
        this.categoriaId = categoriaId;
        this.ativo = ativo;
        this.valor = valor;
        this.validade = validade;
        this.estoqueId = estoqueId
    }
}