import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { API_CONFIG } from '../const/api.config';
import { Movimentacao } from '../model/movimentacao';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Movimentacao[]> {
        
        return this.http.get<{ data: Movimentacao[] }>(`${API_CONFIG.baseUrl}/Movimentacao`)
          .pipe(
            map((response: { data: any; }) => response.data), 
            catchError(error => {
              return throwError(() => new Error('Falha ao obter produtos'));
            })
          );
      }

}