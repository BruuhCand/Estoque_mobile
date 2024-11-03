import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class RegisterUserPage implements OnInit {

  formRegister: FormGroup;
  isToastOpen = false;
  mensagemToast: string = "Falha ao criar usuario, tente novamente mais tarde"


  constructor(private router: Router, private loginService: LoginService) { 
    this.formRegister = new FormGroup({
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      senha: new FormControl('',[Validators.required, Validators.min(3)]),
      role: new FormControl('')
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    
    if (this.formRegister.valid && this.formRegister.value != null) {
      console.log("entrou aqui")
      
      if(this.formRegister.get('role')?.value == "" || this.formRegister.get('role')?.value == null){
        this.formRegister.get('role')?.setValue("default");
      }

      const newUser: User = {
        nome: this.formRegister.get( 'nome')?.value,
        email: this.formRegister.get('email')?.value,
        senha: this.formRegister.get('senha')?.value,
        role: this.formRegister.get('role')?.value
      }

      this.loginService.createUser(newUser).subscribe({
        next: () => {
          this.openToast(true, true)
          this.router.navigate([`/login`])
        },
        error: (err) => {
          console.error('Erro ao fazer login:', err);
          this.openToast(false, true)
          this.formRegister.reset({nome: '', email: '', senha: '', role: '' });
        }
      });
    }
  }

  openToast(sucess: boolean, isOpen: boolean){

    if(sucess){
      this.mensagemToast = "Usuário criado com sucesso"
    }
    else{
      this.mensagemToast = "Falha ao criar usuario, tente novamente mais tarde"
    }

    this.isToastOpen = isOpen
  }

  irLogin(){
    this.router.navigate([`/login`])
  }

}
