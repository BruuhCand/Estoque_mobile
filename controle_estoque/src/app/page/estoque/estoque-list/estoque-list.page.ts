import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule} from '@ionic/angular';
import { Estoque } from 'src/app/model/estoque';
import { add, home, homeOutline,list,listOutline, sadOutline, settings, settingsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ListUtilComponent } from 'src/app/component/list-util/list-util.component';
import { EstoqueService } from 'src/app/service/estoque.service';

@Component({
  selector: 'app-estoque-list',
  templateUrl: './estoque-list.page.html',
  styleUrls: ['./estoque-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, ListUtilComponent]
})
export class EstoqueListPage implements OnInit {

  
  constructor(private router: Router, private estoqueService: EstoqueService,  private location: Location) { 
    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings })
  }

  estoques: Estoque[] = [] 

  atributos: string[] = ['nome'];
  pagina: string = "estoque"
  
  ngOnInit() {
   this.estoqueService.getAll().subscribe({
    next: (response) => {
      this.estoques = response
    },
    error: (err) => {
      console.log(err)
    }
   })
  }

  navegar(){
    this.router.navigate([`/estoques/create`])
  }

  goBack() {
    this.location.back();
  }

}
