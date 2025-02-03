import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private apiUrl = "http://localhost:8081/api/auth/signup";
  addData(user: any) {
    return this.httpClient.post(this.apiUrl, user)
  } 

  getAll() {
    return this.httpClient.get(this.apiUrl)
  }
  
 
}
