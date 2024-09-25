import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListUtilComponent } from 'src/app/component/list-util/list-util.component';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-estoque-all-produtos',
  templateUrl: './estoque-all-produtos.component.html',
  styleUrls: ['./estoque-all-produtos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ListUtilComponent]
})
export class EstoqueAllProdutosComponent  implements OnInit {

  produtos: Produto[] = [
    {id: 1, nome: "Produto1", codBarras: 1234, qntEstoque: 10, qntMinima: 2, categoriaId: 1, ativo: 1, valor: 10.00, validade: new Date('01/01/2001')},
    {id: 2, nome: "Produto2", codBarras: 1234, qntEstoque: 10, qntMinima: 2, categoriaId: 1, ativo: 1, valor: 10.00, validade: new Date('01/01/2001')},
  ]
  listar: any[] = []
  constructor() { }
  atributos: string[] = ["nome", "qntEstoque", "valor"]
  pagina: string = "produtos"
  ngOnInit() {

    this.produtos.forEach(x => {
      var y = {
        id: x.id,
        nome: x.nome,
        qntEstoque: x.qntEstoque,
        valor: "R$ " + x.valor,
        url: "update",
      }
      this.listar.push(y)
    })
  }

}
