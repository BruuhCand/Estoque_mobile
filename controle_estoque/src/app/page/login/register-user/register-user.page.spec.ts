import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserPage } from './register-user.page';
import { LoginService } from 'src/app/service/login.service';
import { of, throwError } from 'rxjs';

describe('RegisterUserPage', () => {
  let component: RegisterUserPage;
  let fixture: ComponentFixture<RegisterUserPage>;
  let loginService: jasmine.SpyObj<LoginService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const loginServiceSpy = jasmine.createSpyObj('LoginService', ['createUser']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [RegisterUserPage, ReactiveFormsModule],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterUserPage);
    component = fixture.componentInstance;
    loginService = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário com campos vazios e inválidos', () => {
    expect(component.formRegister.get('nome')?.value).toBe('');
    expect(component.formRegister.get('email')?.value).toBe('');
    expect(component.formRegister.get('senha')?.value).toBe('');
    expect(component.formRegister.get('role')?.value).toBe('');
    expect(component.formRegister.valid).toBeFalse();
  });

  it('deve tornar o formulário válido com valores válidos', () => {
    component.formRegister.setValue({
      nome: 'Teste',
      email: 'teste@teste.com',
      senha: '12345',
      role: 'admin'
    });
    expect(component.formRegister.valid).toBeTrue();
  });

  it('deve chamar o loginService para criar um novo usuário e navegar ao sucesso', () => {
    component.formRegister.setValue({
      nome: 'Teste',
      email: 'teste@teste.com',
      senha: '12345',
      role: 'admin'
    });
    loginService.createUser.and.returnValue(of(true)); 

    component.onSubmit();

    expect(loginService.createUser).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
    expect(component.mensagemToast).toBe('Usuário criado com sucesso');
    expect(component.isToastOpen).toBeTrue();
  });

  it('deve mostrar mensagem de erro e resetar o formulário em caso de falha na criação do usuário', () => {
    component.formRegister.setValue({
      nome: 'Teste',
      email: 'teste@teste.com',
      senha: '12345',
      role: 'admin'
    });
    loginService.createUser.and.returnValue(throwError(() => new Error('Erro ao criar usuário'))); 

    component.onSubmit();

    expect(component.mensagemToast).toBe('Falha ao criar usuario, tente novamente mais tarde');
    expect(component.isToastOpen).toBeTrue();
    expect(component.formRegister.get('nome')?.value).toBe('');
    expect(component.formRegister.get('email')?.value).toBe('');
    expect(component.formRegister.get('senha')?.value).toBe('');
    expect(component.formRegister.get('role')?.value).toBe('');
  });

  it('deve configurar a mensagem de Toast corretamente ao chamar openToast', () => {
    component.openToast(true, true);
    expect(component.mensagemToast).toBe('Usuário criado com sucesso');
    expect(component.isToastOpen).toBeTrue();

    component.openToast(false, true);
    expect(component.mensagemToast).toBe('Falha ao criar usuario, tente novamente mais tarde');
    expect(component.isToastOpen).toBeTrue();
  });

  it('deve navegar para a tela de login ao chamar irLogin', () => {
    component.irLogin();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
