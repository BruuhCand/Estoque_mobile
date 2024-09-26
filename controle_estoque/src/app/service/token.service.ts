  import { HttpEvent,  HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
 
  import { Observable } from 'rxjs';
  

  export const tokenInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
 

    // Obtém o token do localStorage
    const token = localStorage.getItem('authToken'); // Substitua pela lógica de obtenção do token
    if (token) {
      // Clona a requisição e adiciona o cabeçalho de autorização
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next(req); // Passa a requisição modificada para o próximo manipulador
  };
