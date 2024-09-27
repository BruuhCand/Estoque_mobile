import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  private activatedRoute = inject(ActivatedRoute);
  produtos: any[] = []
  listar: any[] = []
  atributos: string[] = ["nome", "qntEstoque", "valor"]
  pagina: string = "produto"

  
  constructor(private router: Router) { }

  ngOnInit() {

    this.produtos.forEach(x => {
      var y = {
        id: x.id,
        nome: x.nome,
        qntEstoque: x.qntEstoque,
        valor: "R$ " + x.valor,
      }
      this.listar.push(y)
    })
  }

}
