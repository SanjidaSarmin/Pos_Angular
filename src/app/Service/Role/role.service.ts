import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
constructor(private httpClient: HttpClient) { }
  
    private apiUrl = "http://localhost:8081/api/users";
    // private apiUrl = "http://localhost:3000/products";
  
    addData(role: any) {
      return this.httpClient.post(this.apiUrl, role)
    }
  
    getAllUsers() {
      return this.httpClient.get(this.apiUrl);
    }

    getUserByName(userName: string){
      return this.httpClient.get(`${this.apiUrl}/${userName}`);
    }
  
    deleteByUsername(userName: any) {
      return this.httpClient.delete(this.apiUrl + "/userName" + userName)
    }
  
    updateUser(user: any){
      return this.httpClient.put(`${this.apiUrl}/${user.userName}`, user);

  }
}
