import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class EstoqueDetailPage implements OnInit {

  titulo: string = "Estoque ";
  private activatedRoute = inject(ActivatedRoute);
  
  estoqueAtual: Estoque = {
    nome: ''
  };
  constructor(private estoqueService: EstoqueService, private router: Router) { 
    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings, remove, trash, create})

  }

  ngOnInit() {
   const id = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    
    if(!isNaN(id)){
      this.estoqueService.getById(id).subscribe({
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

  editEstoque(){

  }

  deleteEstoque(){
    
  }

  

}
