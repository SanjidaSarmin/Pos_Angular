import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = "http://localhost:8081/api/calculateTotal";

  constructor(private http: HttpClient) {}

  calculateTotal(sellItems: any[]) {
    return this.http.post(this.apiUrl, sellItems);
  }
}