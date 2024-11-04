import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { API_CONFIG } from '../const/api.config';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {

    return this.http.get<{ data: Categoria[] }>(`${API_CONFIG.baseUrl}/Categoria`, )
      .pipe(
        map((response: { data: any; }) => response.data), 
        catchError(error => {
          return throwError(() => new Error('Falha ao obter categorias'));
        })
      );
  }

  create(categoria: Categoria): Observable<any> {
    return this.http.post<{title: string}>(`${API_CONFIG.baseUrl}/Categoria`, categoria)
      .pipe(
        tap((response: { title: any; }) => {
          return response.title
        }),
        catchError(error => {
          return throwError(() => new Error('Falha ao criar categoria'));
        })
      );
  }

  getById(id: number): Observable<Categoria>{
    return this.http.get<{data: Categoria}>(`${API_CONFIG.baseUrl}/Categoria/${id}`)
    .pipe(
      map(response => response.data),
      catchError(error => {
        return throwError(() => new Error('Falha ao obter categorias'));
      })
    );
  }

  update(categoria: Categoria, id: number): Observable<any> {
    return this.http.put<{title: string}>(`${API_CONFIG.baseUrl}/Categoria/${id}`, categoria)
      .pipe(
        tap(response => {
          return response.title
        }),
        catchError(error => {
          return throwError(() => new Error('Falha ao atualizar categoria'));
        })
      );
  }

  delete(id: number): Observable<any> {

    let params = new HttpParams().set('id', id.toString());
    
    return this.http.get<{ title: string }>(`${API_CONFIG.baseUrl}/Categoria`, {params})
      .pipe(
        tap((response: { title: any; }) => {
          return response.title
        }),
        catchError(error => {
          return throwError(() => new Error('Falha ao deletar categoria'));
        })
      );
  }


}
