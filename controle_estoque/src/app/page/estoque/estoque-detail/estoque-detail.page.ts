import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-estoque-detail',
  templateUrl: './estoque-detail.page.html',
  styleUrls: ['./estoque-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EstoqueDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
