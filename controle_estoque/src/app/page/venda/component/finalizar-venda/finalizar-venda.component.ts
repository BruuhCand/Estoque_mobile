import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule,  ModalController  } from '@ionic/angular';
import { Validade } from 'src/app/model/produto';
import { ValidadeDTO } from 'src/app/model/validade';
import { Venda } from 'src/app/model/venda';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-finalizar-venda',
  templateUrl: './finalizar-venda.component.html',
  styleUrls: ['./finalizar-venda.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class FinalizarVendaComponent  implements OnInit {

  @Input() vendaArray: any;
  @Input() estoqueId: number | undefined;

  constructor(private modalCtrl: ModalController, private produtoService: ProdutoService, private router: Router) { }
  novoArray: any[] = []
  ngOnInit() {
    this.novoArray = [...this.vendaArray];
    console.log(this.novoArray)
  }

  cancel(){
    this.modalCtrl.dismiss(this.novoArray);
  }

  atualizarVenda(index: any){
    this.novoArray.splice(index, 1)
    console.log(this.novoArray)
  }

  finalizarVenda(){
    let venda: Venda[] = []

    this.novoArray.map(x => {
        var item: Venda = {
          produtoId: x.id,
          validade: x.validade,
          quantidade: x.quantidade
        }
        venda.push(item)
        console.log(this.estoqueId)
    })

    console.log(venda)

    this.produtoService.venda(venda).subscribe({
      next: (value) => {
        console.log(value)
        if(this.estoqueId){
          this.modalCtrl.dismiss();
          this.router.navigate([`/estoque`, this.estoqueId])
        }
      },
      error: (err) => {

      }
    })
  }

}
