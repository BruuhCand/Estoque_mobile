import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, create, home, homeOutline, list, listOutline, remove, sadOutline, settings, settingsOutline, trash } from 'ionicons/icons';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Estoque } from 'src/app/model/estoque';
import { EstoqueService } from 'src/app/service/estoque.service';

@Component({
  selector: 'app-estoque-detail',
  templateUrl: './estoque-detail.page.html',
  styleUrls: ['./estoque-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ReactiveFormsModule]
})
export class EstoqueDetailPage implements OnInit {

  estoqueNomeControl = new FormControl('', [Validators.required]);

  titulo: string = "Estoque ";
  private activatedRoute = inject(ActivatedRoute);
  id: number = -1
  estoqueAtual: Estoque = {
    nome: ''
  };
  constructor(private estoqueService: EstoqueService, private router: Router, private toastController: AbortController) { 
    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings, remove, trash, create})

  }

  ngOnInit() {
   this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    
    if(!isNaN(this.id)){
      this.estoqueService.getById(this.id).subscribe({
        next: (value) => {
          this.estoqueAtual = value
          this.reloadTitle(value.nome)
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
    else{
      this.router.navigate([`/estoques`]).then(() => {
        location.reload();
      });
    }
   
  }

  reloadTitle(nome: string){
    this.titulo = this.titulo + nome ;
  }

  //delete
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        //excluir estoque
      },
    },
  ];

  //update
  public okButtons = [ {
    text:'OK',
    handler: (data: any) =>{
      let estoqueUpdate: Estoque = {
        nome: data.estoqueNome
      }


    }

  }];
  public alertInputs = [
    {
      type: 'textarea',
      placeholder: 'Name',
      min: 1,
      name: 'estoqueNome'
    },
   
  ];

  update(estoqueNew: Estoque){

    if(this.id != -1 && !isNaN(this.id)){
      this.estoqueService.update(estoqueNew, this.id).subscribe({
        next: (value) => {
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
    
  }

  

  

}
