import { Component, OnInit } from '@angular/core';
import { add, home, homeOutline,list,listOutline, sadOutline, settings, settingsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule} from '@ionic/angular';
import { MovimentacaoService } from 'src/app/service/movimentacao.service';
import { Movimentacao } from 'src/app/model/movimentacao';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class MovimentacaoComponent  implements OnInit {

  constructor(private movimentacaoService: MovimentacaoService) { }

  movimentacoes: Movimentacao[] = [] 

  atributos: string[] = ['nome'];
  pagina: string = "movimentacao"
  
  ngOnInit() {
   this.movimentacaoService.getAll().subscribe({
    next: (response) => {
      this.movimentacoes = response
    },
    error: (err) => {
      console.log(err)
    }
   })
  }


}
