import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { AuthService } from './auth.service';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var token = this.auth.getToken();
    if(token) {
        request = request.clone({
            setHeaders: {
              Authorization: this.auth.getToken()
            }
          });
    }    
    return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
            return throwError(error);
        })
    );
  }
}