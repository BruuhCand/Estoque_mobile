import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-validade-produto',
  templateUrl: './validade-produto.page.html',
  styleUrls: ['./validade-produto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ValidadeProdutoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
