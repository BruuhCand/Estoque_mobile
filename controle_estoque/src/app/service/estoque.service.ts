import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estoque } from '../model/estoque';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { API_CONFIG } from '../const/api.config';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  create(estoque: Estoque): Observable<any> {
    return this.http.post<{title: string}>(`${API_CONFIG.baseUrl}/Estoque`, estoque)
      .pipe(
        tap(response => {
          return response.title
        }),
        catchError(error => {
          console.error('Erro de login:', error);
          return throwError(() => new Error('Falha ao criar estoque'));
        })
      );
  }

  getAll(): Observable<Estoque[]> {
    return this.http.get<{ data: Estoque[] }>(`${API_CONFIG.baseUrl}/Estoque`)
      .pipe(
        map((response: { data: any; }) => response.data), // Mapeia a resposta para retornar apenas o array de Estoque
        catchError(error => {
          console.error('Erro ao obter estoques:', error);
          return throwError(() => new Error('Falha ao obter estoques'));
        })
      );
  }

  getById(id: number): Observable<Estoque>{
    return this.http.get<{data: Estoque}>(`${API_CONFIG.baseUrl}/Estoque/${id}`)
    .pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Erro ao obter estoque:', error);
        return throwError(() => new Error('Falha ao obter estoque'));
      })
    );
  }
}
