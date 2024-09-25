import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { add, home, homeOutline, list, listOutline, sadOutline, settings, settingsOutline } from 'ionicons/icons';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.page.html',
  styleUrls: ['./produto-create.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProdutoCreatePage implements OnInit {

  constructor() {
    addIcons({sadOutline, add, homeOutline, listOutline, settingsOutline, home, list, settings })
   }

  ngOnInit() {
  }

}
