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

  navegar(objeto: any){
    console.log("entrou aqui")

    if(objeto.url != ""){
      this.router.navigate([`/${this.entity}`, objeto.nome, objeto.url]);
    }
    else{
      this.router.navigate([`/${this.entity}`, objeto.nome]);
    }
  }

}
