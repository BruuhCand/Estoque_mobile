import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-util',
  templateUrl: './list-util.component.html',
  styleUrls: ['./list-util.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class ListUtilComponent  implements OnInit {

  @Input() dadosList: any[] = [];
  @Input() atributos: string[] = [];
  @Input() entity: string = "";
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.dadosList)
  }

  navegar(objeto: any) {
    console.log("entrou aqui");
  
    let construUrl = this.entity;
  
    if (objeto.id) {
      construUrl += `/${objeto.id}`;
    }
  
    if (objeto.url) {
      construUrl += `/${objeto.url}`;
    }

    if(objeto.segId){
      construUrl += `/${objeto.segId}`;
    }
  
    // Verifica se algo foi adicionado à URL antes de navegar
    if (construUrl !== this.entity) {
      this.router.navigate([`/${construUrl}`]).then(() => {
        
      });

      
    } else {
      console.log("Nenhuma navegação realizada.");
    }
  }

  getEstiloItem(item: any) {
    if (item.validade) {
      const validade = new Date(item.validade);  
      const hoje = new Date();
      const umaSemana = new Date();
      umaSemana.setDate(hoje.getDate() + 7);
  
      // Verifica se a validade é menor que hoje
      if (validade < hoje) {
        return {
          'border-color': 'red'  // Validade já expirou
        };
      } 
      // Verifica se a validade está dentro de uma semana
      else if (validade >= hoje && validade <= umaSemana) {
        return {
          'border-color': 'yellow'  // Validade expira em menos de 7 dias
        };
      } 
    }
  
    return {}; // Retorna sem estilos se não houver validade
  }

}
