import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IonicModule} from '@ionic/angular';
import { Estoque } from 'src/app/model/estoque';
import { add, home, homeOutline,list,listOutline, sadOutline, settings, settingsOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-estoque-list',
  templateUrl: './estoque-list.page.html',
  styleUrls: ['./estoque-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class EstoqueListPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() { 
    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings })
  }

  public estoques: Estoque[] = [
    {id: 1, nome: "bruna"},
    {id: 2, nome: "roupa"},
  ] 

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
