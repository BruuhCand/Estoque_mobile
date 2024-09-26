import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegisterUserPage implements OnInit {

  formRegister: FormGroup;
  constructor() { 
    this.formRegister = new FormGroup({
      nome: new FormControl([Validators.required]),
      email: new FormControl([Validators.required, Validators.email]),
      senha: new FormControl([Validators.required, Validators.min(3)]),
      role: new FormControl()
    })
  }

  ngOnInit() {

  
  }

}
