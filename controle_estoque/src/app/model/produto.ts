import { at } from "ionicons/icons";
import { Categoria } from "./categoria";
import { Estoque } from "./estoque";

export interface Produto{

    id?: number;
    nome: string;
    codigoBarras: number;
    quantidade: number;
    quantidadeMinima: number;
    categoriaId: number;
    categoria?: Categoria;
    valor: number;
    dataValidade: string;
    estoqueId: number;
    estoque?: Estoque;


}

export interface Validade{
    dataValidade:Date;
    quantidade: number;    
}

export interface ProdutoDTO{
    id?: number;
    nome: string;
    codigoBarras: number;
    quantidadeTotal: number;
    quantidadeMinima: number;
    categoriaNome: string;
    categoria?: Categoria;
    valor: number;
    validades: Validade[];
    estoqueId: number;
    estoque?: Estoque;
}
