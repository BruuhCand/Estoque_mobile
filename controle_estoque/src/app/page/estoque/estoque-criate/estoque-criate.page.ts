import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-estoque-criate',
  templateUrl: './estoque-criate.page.html',
  styleUrls: ['./estoque-criate.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EstoqueCriatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
