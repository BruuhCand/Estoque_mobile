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
import { Validade } from 'src/app/model/produto';
import { FinalizarVendaComponent } from '../component/finalizar-venda/finalizar-venda.component';

@Component({
  selector: 'app-venda-produto',
  templateUrl: './venda-produto.page.html',
  styleUrls: ['./venda-produto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ListUtilComponent, ValidadesProdutoComponent, FinalizarVendaComponent]
})
export class VendaProdutoPage implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  produtos:any[] = []
  listar: any[] = []
  estoqueId: any
  id: any
  vendaDetail: Validade[] = []
  vendaArray: any[] = []


  constructor( private produtoService: ProdutoService, private modalCtrl: ModalController) { 
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
       
        data.data.validades.forEach((validade: any) => {
          console.log('Validade:', validade.validade);
          console.log('Quantidade:', validade.quantidade);
          
          var encontra = this.vendaArray.find(x => x.idVal == validade.idVal)

          if(encontra){
            encontra.quantidade = validade.quantidade
          }
          else if(validade.quantidade > 0){
            this.vendaArray.push(validade)
          }

          console.log(this.vendaArray)
        });
      }
    });

    return await modal.present();
  }

  async finalizarVenda(){

    const modal = await this.modalCtrl.create({
      component: FinalizarVendaComponent,
      componentProps: { vendaArray: this.vendaArray, estoqueId: this.estoqueId } 
    });

    return await modal.present();
  }

}