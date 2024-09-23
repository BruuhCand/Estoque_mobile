import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, homeOutline, list, listOutline, sadOutline, settings, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-estoque-criate',
  templateUrl: './estoque-criate.page.html',
  styleUrls: ['./estoque-criate.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,  ReactiveFormsModule]
})
export class EstoqueCriatePage implements OnInit {

  estoqueNomeControl = new FormControl('', [Validators.required]);
  
  constructor() {
    addIcons({sadOutline, homeOutline, listOutline, settingsOutline, home, list, settings })
   }

  ngOnInit() {
  }

  onSubmit(){

    var valor = this.estoqueNomeControl.value;
  }

}
