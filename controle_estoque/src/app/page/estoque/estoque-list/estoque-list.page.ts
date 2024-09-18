import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonRouterOutlet, IonTitle, IonToolbar, IonMenuButton,  IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import {} from '@ionic/angular';

@Component({
  selector: 'app-estoque-list',
  templateUrl: './estoque-list.page.html',
  styleUrls: ['./estoque-list.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,  IonContent, IonRouterOutlet, IonMenuButton, IonButtons]
})
export class EstoqueListPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

}
