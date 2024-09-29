import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-venda-detail',
  templateUrl: './venda-detail.page.html',
  styleUrls: ['./venda-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VendaDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
