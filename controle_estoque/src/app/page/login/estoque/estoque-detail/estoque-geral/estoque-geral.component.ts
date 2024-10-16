import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListUtilComponent } from 'src/app/component/list-util/list-util.component';


@Component({
  selector: 'app-estoque-geral',
  templateUrl: './estoque-geral.component.html',
  styleUrls: ['./estoque-geral.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ListUtilComponent]
})
export class EstoqueGeralComponent  implements OnInit {

  atributos: string[] = ["nome"];

  estoqueGeral: any = [
    {nome: "Todos produtos", url: "produtos"},
    {nome: "Lista de compras", url: "compras"},
    {nome: "Abaixo do estoque", url: "estoquemin"},
    {nome: "Próximo vencimento", url: "vencimento"},
    {nome: "Produtos vencidos", url: "vencidos"}
  ]
  private activatedRoute = inject(ActivatedRoute);
  pagina: string = "estoque"
  constructor(private route: Router) { }
  idPagina: any;
  ngOnInit() {
    this.idPagina = this.activatedRoute.snapshot.paramMap.get('id') as string 
    

    if (this.idPagina) {
      this.estoqueGeral = this.estoqueGeral.map((item: any) => {
        return { ...item, id: this.idPagina }; 
      });
    }
  }

  adicionaProd(){
   
    this.route.navigate(([`/produto/create`]), {
      state: { estoqueId: this.idPagina},
    });
  }

  removeProd(){
    this.route.navigate([`/venda`, this.idPagina]);
  }

}
