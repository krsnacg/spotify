import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

export const injectSessionInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
    try {
      const token = inject(CookieService);
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token.get('token')}`
        }
      });
      return next(req);
    } catch (error) {
      console.log('Algo sucedió??', error);
      return next(req);
    }
  
};
