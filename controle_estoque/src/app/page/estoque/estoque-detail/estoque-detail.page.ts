import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, home, homeOutline, list, listOutline, sadOutline, settings, settingsOutline } from 'ionicons/icons';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Estoque } from 'src/app/model/estoque';

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


  constructor() { 
    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings })

  }

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.paramMap.get('nome') as string);
    this.titulo = this.titulo + this.activatedRoute.snapshot.paramMap.get('nome') as string ;
  }

  

}
