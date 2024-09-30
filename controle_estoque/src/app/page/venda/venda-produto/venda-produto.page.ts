import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule,  ModalController  } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings, remove, trash, create } from 'ionicons/icons';
import { ProdutoService } from 'src/app/service/produto.service';
import { ListUtilComponent } from 'src/app/component/list-util/list-util.component';
import { ValidadesProdutoComponent } from '../component/validades-produto/validades-produto.component';

@Component({
  selector: 'app-venda-produto',
  templateUrl: './venda-produto.page.html',
  styleUrls: ['./venda-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListUtilComponent, ValidadesProdutoComponent]
})
export class VendaProdutoPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  produtos:any[] = []
  listar: any[] = []
  estoqueId: any
  id: any
  constructor(private router: Router, private produtoService: ProdutoService, private modalCtrl: ModalController) { 
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

  async abrirModal(produto: any) {
    console.log(produto)
    const modal = await this.modalCtrl.create({
      component: ValidadesProdutoComponent,
      componentProps: { produto }
    });

    
    modal.onDidDismiss().then((data) => {
      if (data.data) {
        console.log('Dados retornados:', data.data);
       
      }
    });

    return await modal.present();
  }

}