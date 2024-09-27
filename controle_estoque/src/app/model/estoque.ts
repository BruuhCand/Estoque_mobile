import { Produto } from "./produto";

export interface Estoque {

    id?: number;
    nome: string;
    produtos?: Produto[];

  
}
