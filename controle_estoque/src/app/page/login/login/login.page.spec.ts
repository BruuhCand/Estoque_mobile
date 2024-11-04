import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { LoginService } from 'src/app/service/login.service';
import { of, throwError } from 'rxjs';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let loginService: jasmine.SpyObj<LoginService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginPage, ReactiveFormsModule], // Altere para `imports`
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário com campos vazios e inválidos', () => {
    expect(component.form.get('email')?.value).toBe('');
    expect(component.form.get('senha')?.value).toBe('');
    expect(component.form.valid).toBeFalse();
  });

  it('deve tornar o formulário válido com valores válidos', () => {
    component.form.setValue({ email: 'teste@teste.com', senha: '12345' });
    expect(component.form.valid).toBeTrue();
  });

  it('deve chamar o loginService e navegar ao sucesso do login', () => {
    component.form.setValue({ email: 'teste@teste.com', senha: '12345' });
    loginService.login.and.returnValue(of(true));

    component.logar();

    expect(loginService.login).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/estoques']);
  });

  it('deve mostrar mensagem de erro e resetar o formulário em caso de falha no login', () => {
    component.form.setValue({ email: 'teste@teste.com', senha: '12345' });
    loginService.login.and.returnValue(throwError(() => new Error('Erro de login')));

    component.logar();

    expect(component.mensagemToast).toBe('Falha ao efetuar login');
    expect(component.isToastOpen).toBeTrue();
    expect(component.form.get('email')?.value).toBe('');
    expect(component.form.get('senha')?.value).toBe('');
  });

  it('deve configurar a mensagem de Toast corretamente ao chamar mensagemLogin', () => {
    component.mensagemLogin(true, true);
    expect(component.mensagemToast).toBe('Login feito com sucesso!!');
    expect(component.isToastOpen).toBeTrue();

    component.mensagemLogin(false, true);
    expect(component.mensagemToast).toBe('Falha ao efetuar login');
    expect(component.isToastOpen).toBeTrue();
  });

  it('deve navegar para a tela de registro ao chamar irRegister', () => {
    component.irRegister();
    expect(router.navigate).toHaveBeenCalledWith(['/register-user']);
  });
});
