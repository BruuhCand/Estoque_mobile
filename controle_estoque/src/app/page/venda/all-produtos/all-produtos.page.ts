import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoDTO } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { addIcons } from 'ionicons';
import { add, create, home, homeOutline, list, listOutline, remove, sadOutline, settings, settingsOutline, trash } from 'ionicons/icons';
import { ListUtilComponent } from 'src/app/component/list-util/list-util.component';

@Component({
  selector: 'app-all-produtos',
  templateUrl: './all-produtos.page.html',
  styleUrls: ['./all-produtos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListUtilComponent]
})
export class AllProdutosPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  produtos:any[] = []
  listar: any[] = []
  atributos: string[] = ["nome", "qntEstoque", "valor"]
  pagina: string = "venda"
  estoqueId: any
  id: any
  constructor(private router: Router, private produtoService: ProdutoService) { 
    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings, remove, trash, create})
  }

  ngOnInit() {
    
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      
      if (this.id) {
        this.estoqueId = Number(this.id);
        this.carregarProdutos( this.estoqueId);
      } else {
        console.error('ID não encontrado na rota.');
      }
    
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
                id: this.estoqueId,
                nome: x.nome,
                qntEstoque: x.quantidadeTotal,
                valor: "R$ " + x.valor,
                segId: x.id
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
