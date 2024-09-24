import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-list-util',
  templateUrl: './list-util.component.html',
  styleUrls: ['./list-util.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class ListUtilComponent  implements OnInit {

  @Input() dadosList: any[] = [];
  @Input() atributos: string[] = [];
  @Input()  tipoList: string = "";

  constructor() { }

  ngOnInit() {
  }

}
