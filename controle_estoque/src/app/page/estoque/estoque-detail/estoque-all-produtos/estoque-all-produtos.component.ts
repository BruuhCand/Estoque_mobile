import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListUtilComponent } from 'src/app/component/list-util/list-util.component';
import { Produto, ProdutoDTO } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-estoque-all-produtos',
  templateUrl: './estoque-all-produtos.component.html',
  styleUrls: ['./estoque-all-produtos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ListUtilComponent]
})
export class EstoqueAllProdutosComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  produtos: ProdutoDTO[] = []
  listar: any[] = []
  atributos: string[] = ["nome", "qntEstoque", "valor"]
  pagina: string = "produto"

  
  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit() {
    
    this.activatedRoute.parent?.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        const estoqueId = Number(id);
        this.carregarProdutos(estoqueId);
      } else {
        console.error('ID não encontrado na rota.');
      }
    });
    
  }

  carregarProdutos(id: number){
    if(!isNaN(id)){
      this.produtoService.getAll(id).subscribe({
        next: (response) => {
          this.produtos = response
          console.log("deuu bomm")
          console.log(this.produtos)
          if(this.produtos.length > 0){
            this.produtos.forEach(x => {
              var y = {
                id: x.id,
                nome: x.nome,
                qntEstoque: x.quantidadeTotal,
                valor: "R$ " + x.valor,
              }
              this.listar.push(y)
          })      
          }
          
        },
        error: (err) => {
          console.log(err)
        }
       })
    }
    
    
  }

}
