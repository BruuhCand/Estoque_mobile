import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListUtilComponent } from 'src/app/component/list-util/list-util.component';


@Component({
  selector: 'app-estoque-geral',
  templateUrl: './estoque-geral.component.html',
  styleUrls: ['./estoque-geral.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, ListUtilComponent]
})
export class EstoqueGeralComponent  implements OnInit {

  atributos: string[] = ["nome"];

  estoqueGeral: any = [
    {nome: "Todos produtos"},
    {nome: "Lista de compras"},
    {nome: "Abaixo do estoque"},
    {nome: "Próximo vencimento"},
    {nome: "Produtos vencidos"}
  ]
  constructor() { }

  ngOnInit() {}

}
