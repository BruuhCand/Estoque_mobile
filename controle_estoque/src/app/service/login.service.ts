import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { API_CONFIG } from '../const/api.config';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private tokenKey = 'token'; // Chave para armazenar o token no localStorage

  constructor(private http: HttpClient) { }

  // Método de login que envia o email e a senha para a API
  login(user: User): Observable<any> {
    return this.http.post<{ token: string }>(`${API_CONFIG.baseUrl}/Login`, user)
      .pipe(
        tap(response => {
          // Armazena o token no localStorage
          this.setToken(response.token);
        }),
        catchError(error => {
          console.error('Erro de login:', error);
          return throwError(() => new Error('Falha no login, tente novamente.'));
        })
      );
  }

  createUser(user: User): Observable<any> {
    console.log(user)
    return this.http.post<{ token: string }>(`${API_CONFIG.baseUrl}/Usuario`, user)
  }

  // Método para armazenar o token no localStorage
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Método para obter o token do localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Método para remover o token (logout)
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Método para verificar se o usuário está autenticado
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
