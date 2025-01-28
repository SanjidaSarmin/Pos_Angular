import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClient: HttpClient) { }

  private apiUrl = "http://localhost:8081/api/product";
  // private apiUrl = "http://localhost:3000/products";

  addData(product: any) {
    return this.httpClient.post(this.apiUrl, product)
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

  updateData(product: Products) {
    return this.httpClient.put(this.apiUrl + "/" + product.id, product)
  }

  serarchProduct(searchText: string) {
    return this.httpClient.get(this.apiUrl +"/search" + "?keyword=" + searchText)
  }
}
