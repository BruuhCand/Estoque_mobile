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
  
    // Verifica se algo foi adicionado à URL antes de navegar
    if (construUrl !== this.entity) {
      this.router.navigate([`/${construUrl}`]).then(() => {
        
      });
      
    } else {
      console.log("Nenhuma navegação realizada.");
    }
  }

}
