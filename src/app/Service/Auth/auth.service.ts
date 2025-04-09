import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const AUTH_API = 'https://e9ac-103-4-117-150.ngrok-free.app/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'ngrok-skip-browser-warning': 'true' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  // private messageSource = new BehaviorSubject('false');
  // currentMessage = this.messageSource.asObservable();

  // changeMessage(message: string){this.messageSource.next(message)}

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
