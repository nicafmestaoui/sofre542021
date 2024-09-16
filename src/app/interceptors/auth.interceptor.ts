import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.authService.isAuthenticated()) {
      return next.handle(request);
    } else {
      const token = localStorage.getItem('token');
      if (token) {
        const cloneReq = request.clone({
          headers: new HttpHeaders().set('Authorization', token),
        });
        return next.handle(cloneReq);
      } else {
        return next.handle(request);
      }
    }
  }
}

export const HTTPINTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
