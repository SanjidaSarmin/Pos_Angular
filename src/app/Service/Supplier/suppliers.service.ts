import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {
 
constructor(private httpClient: HttpClient) { }
 
   private apiUrl = "http://localhost:8081/api/supplier";
 
   addData(supplier : any){
     return this.httpClient.post(this.apiUrl, supplier)
   }
 
   getAllData(){
     return this.httpClient.get(this.apiUrl)
   }
 
   getById(id: any){
     return this.httpClient.get(this.apiUrl +"/"+ id) 
   }
 
   deleteById(id:any){
     return this.httpClient.delete(this.apiUrl+"/"+ id)
   }
 
   updateData(supplier: any){
     return this.httpClient.put(this.apiUrl+"/"+supplier.id, supplier)
   }

   searchsupplier(name: string, page: number, size: number) {
    const params = {
      suppliername: name || '', 
      page: page.toString(),
      size: size.toString(),
    };
    return this.httpClient.get<any>(`${this.apiUrl}/search`, { params });
  }

  getTotalSupplier(): Observable<number> {
      return this.httpClient.get<number>(`${this.apiUrl}/total`);
    }

}
