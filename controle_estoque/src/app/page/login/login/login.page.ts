import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { LoginService } from 'src/app/service/login.service';
import { Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RouterLink]
  
})
export class LoginPage implements OnInit {
  
  form: FormGroup;
  isToastOpen = false;
  mensagemToast: string = "Falha ao efetuar login"

  constructor(private loginService: LoginService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.min(3)])
    })
   }

  ngOnInit() {
  }

  logar(){
    
    if (this.form.valid && this.form.value != null) {
      const userLogin: User = {
        email: this.form.get('email')?.value,
        senha: this.form.get('senha')?.value
      }

      this.loginService.login(userLogin).subscribe({
        next: () => {
          this.mensagemLogin(true, true)
          this.router.navigate([`/estoques`])
        },
        error: (err) => {
          console.error('Erro ao fazer login:', err);
          this.mensagemLogin(false, true)
          this.form.reset({ email: '', senha: '' });
        }
      });
    }
  }

  mensagemLogin(sucess: boolean, isOpen: boolean){

    if(sucess){
      this.mensagemToast = "Login feito com sucesso!!"
    }
    else{
      this.mensagemToast = "Falha ao efetuar login"
    }

    this.isToastOpen = isOpen
  }

  irRegister(){
    this.router.navigate([`/register-user`])
  }

}
