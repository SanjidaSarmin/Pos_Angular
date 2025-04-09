// auth.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Example: Add an Authorization header
    const token = 'your-token-here'; // You can get this from a service/localStorage

    const authReq = req.clone({
      setHeaders: {
        'ngrok-skip-browser-warning' : 'true'
      }
    });

    return next.handle(authReq);
  }
}
