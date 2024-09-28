import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto, ProdutoDTO } from '../model/produto';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { API_CONFIG } from '../const/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  create(produto: Produto): Observable<any> {
    return this.http.post<{title: string}>(`${API_CONFIG.baseUrl}/Produto`, produto)
      .pipe(
        tap(response => {
          return response.title
        }),
        catchError(error => {
          console.error('Erro de login:', error);
          return throwError(() => new Error('Falha ao criar produto'));
        })
      );
  }

  
  getAll(id: number): Observable<ProdutoDTO[]> {

    let params = new HttpParams().set('estoqueId', id.toString());
    
    return this.http.get<{ data: ProdutoDTO[] }>(`${API_CONFIG.baseUrl}/Produto`, {params})
      .pipe(
        map((response: { data: any; }) => response.data), 
        catchError(error => {
          return throwError(() => new Error('Falha ao obter produtos'));
        })
      );
  }

  getById(id: number): Observable<ProdutoDTO>{
    return this.http.get<{data: ProdutoDTO}>(`${API_CONFIG.baseUrl}/Produto/${id}`)
    .pipe(
      map(response => response.data),
      catchError(error => {
        return throwError(() => new Error('Falha ao obter produto'));
      })
    );
  }

  update(produto: Produto, id: number): Observable<any> {
    return this.http.put<{title: string}>(`${API_CONFIG.baseUrl}/Produto/${id}`, produto)
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

  getByCodBarras(codigo: number): Observable<ProdutoDTO>{
    return this.http.get<{data: ProdutoDTO}>(`${API_CONFIG.baseUrl}/Produto/CodBarras/${codigo}`)
    .pipe(
      map(response => response.data),
      catchError(error => {
        return throwError(() => new Error('Falha ao obter produto'));
      })
    );
  }
}
