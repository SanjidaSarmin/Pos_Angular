import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   constructor(private httpClient: HttpClient) { }
  
    private apiUrl = "http://localhost:8081/api/employee";
    // private apiUrl = "http://localhost:3000/products";
  
    addData(employee: any) {
      return this.httpClient.post(this.apiUrl, employee)
    }
  
    getAllData() {
      return this.httpClient.get(this.apiUrl)
    }
  
    getById(id: any) {
      return this.httpClient.get(this.apiUrl + "/" + id)
    }
  
    deleteById(id: any) {
      return this.httpClient.delete(this.apiUrl + "/" + id)
    }
  
    updateData(employee: any) {
      return this.httpClient.put(this.apiUrl + "/" + employee.id, employee)
    }

    getTotalEmployees(): Observable<number> {
      return this.httpClient.get<number>(`${this.apiUrl}/total`);
    }
  
    getNewEmployeesThisMonth(): Observable<number> {
      return this.httpClient.get<number>(`${this.apiUrl}/month`);
    }
}
