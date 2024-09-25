import { Produto } from "./produto";

export class Estoque {

    public id?: number;
    public nome: string;
    public produtos?: Produto[];

    public constructor(nome: string){
        this.nome = nome;
    }
}
