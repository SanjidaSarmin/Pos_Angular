import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  // private apiUrl = "http://localhost:8081/api/auth/signup";
  private apiUrl = environment.apiUrl+"/api/auth/signup";
  addData(user: any) {
    return this.httpClient.post(this.apiUrl, user)
  } 

  getAll() {
    return this.httpClient.get(this.apiUrl)
  }
  
 
}
