import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-estoque-all-produtos',
  templateUrl: './estoque-all-produtos.component.html',
  styleUrls: ['./estoque-all-produtos.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class EstoqueAllProdutosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
