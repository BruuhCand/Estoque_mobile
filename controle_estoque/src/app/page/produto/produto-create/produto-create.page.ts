import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.page.html',
  styleUrls: ['./produto-create.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProdutoCreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
