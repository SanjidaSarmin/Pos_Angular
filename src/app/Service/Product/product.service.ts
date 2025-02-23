import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/Product';

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

  getAllDataByBranch(val: any) {
    return this.httpClient.get(this.apiUrl+'/byBrunchId?branches='+val)
  }
  getById(id: any) {
    return this.httpClient.get(this.apiUrl + "/" + id)
  }

  deleteById(id: any) {
    return this.httpClient.delete(this.apiUrl + "/" + id)
  }

  updateData(product: Product) {
    return this.httpClient.put(this.apiUrl + "/" + product.id, product)
  }

  searchProduct(name: string, page: number, size: number) {
    const params = {
      name: name || '', 
      page: page.toString(),
      size: size.toString(),
    };
  
    return this.httpClient.get<any>(`${this.apiUrl}/search`, { params });
  }
  

  getLowStockProducts(){
    return this.httpClient.get(this.apiUrl + "/lowstock");
  }

  getTotalProducts(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/total`);
  }

  getLowStock(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/lowstockcount`);
  }

  getOutOfStockProducts(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/outofstock`);
  }
}
