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
  selector: 'app-estoque-criate',
  templateUrl: './estoque-criate.page.html',
  styleUrls: ['./estoque-criate.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,  ReactiveFormsModule]
})
export class EstoqueCriatePage implements OnInit {

  estoqueNomeControl = new FormControl('', [Validators.required]);

  constructor(private estoqueService: EstoqueService, private router: Router) {
    addIcons({sadOutline, homeOutline, listOutline, settingsOutline, home, list, settings })
   }

  ngOnInit() {

    
  }

  onSubmit(){

    let valor: Estoque = {
      nome: this.estoqueNomeControl.value as string
    } 

    if(valor.nome != null){
      this.estoqueService.create(valor).subscribe({
        next: (response) => {
          console.log(response)
         this.router.navigate([`/estoques`]).then(() => {
          location.reload();
        });
        },
        error: (err) => {
          console.error('Erro ao fazer login:', err);
          
          this.estoqueNomeControl.reset(); 
        }
      })
    }
    
  }


}
