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
    validade: Date;
    estoqueId: number;
    estoque?: Estoque;


}

export interface Validade{
    validadeData:Date;
    quantidade: number;    
}

export interface ProdutoDTO{
    id?: number;
    nome: string;
    codigoBarras: number;
    quantidade: number;
    quantidadeMinima: number;
    categoriaId: number;
    categoria?: Categoria;
    valor: number;
    validade: Validade[];
    estoqueId: number;
    estoque?: Estoque;
}
