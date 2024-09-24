import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule} from '@ionic/angular';
import { Estoque } from 'src/app/model/estoque';
import { add, home, homeOutline,list,listOutline, sadOutline, settings, settingsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ListUtilComponent } from 'src/app/component/list-util/list-util.component';

@Component({
  selector: 'app-estoque-list',
  templateUrl: './estoque-list.page.html',
  styleUrls: ['./estoque-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, ListUtilComponent]
})
export class EstoqueListPage implements OnInit {

  
  constructor(private router: Router) { 
    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings })
  }

  public estoques: Estoque[] = [
    {id: 1, nome: "bruna", url: ""},
    {id: 2, nome: "roupa", url: ""},
  ] 

  atributos: string[] = ['nome'];
  pagina: string = "estoque"
  ngOnInit() {
   
  }

  navegar(){
    this.router.navigate(['estoque/criate'])
  }

}
