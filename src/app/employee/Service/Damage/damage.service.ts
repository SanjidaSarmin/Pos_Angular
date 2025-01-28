import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DamageService {
  

constructor(private httpClient: HttpClient) { }

  private apiUrl = "http://localhost:8081/api/damage";

  addData(damage : any){
    return this.httpClient.post(this.apiUrl, damage)
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

  updateData(damage: any){
    return this.httpClient.put(this.apiUrl+"/"+damage.id, damage)
  }

  serarchProduct(searchText: string) {
    return this.httpClient.get(this.apiUrl +"/search" + "?productname=" + searchText)
  }
}
