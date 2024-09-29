import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, homeOutline, list, listOutline, sadOutline, settings, settingsOutline } from 'ionicons/icons';
import { EstoqueService } from 'src/app/service/estoque.service';
import { Router } from '@angular/router';
import { Estoque } from 'src/app/model/estoque';

@Component({
  selector: 'app-saida-inicio',
  templateUrl: './saida-inicio.page.html',
  styleUrls: ['./saida-inicio.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,  ReactiveFormsModule]
})
export class SaidaInicioPage implements OnInit {

  estoqueId = new FormControl<number>(-1, [Validators.required]);
  estoques:Estoque [] = []
  dadosRecebidos: any

  constructor( private router: Router, private estoqueService: EstoqueService) {
    addIcons({sadOutline, homeOutline, listOutline, settingsOutline, home, list, settings })
   }

  ngOnInit() {
    this.carregaListas()
    
  }

  envioEstoque(){

    const navigation = this.router.getCurrentNavigation();
    if (navigation  && navigation.extras.state !== undefined ) {
      this.dadosRecebidos = navigation.extras.state['estoqueId'];
      this.estoqueId.setValue(Number(this.dadosRecebidos));
      console.log(this.dadosRecebidos)
    }
  }

  onSubmit(){
    //trocar isso
    this.router.navigate([`/estoques`])
  }

  carregaListas(){

    this.estoqueService.getAll().subscribe({
      next: (response) => {
        this.estoques = response
      },
      error: (err) => {
        console.log(err)
      }
     })

  }


}

