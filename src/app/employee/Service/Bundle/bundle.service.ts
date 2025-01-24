import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  private apiUrl = "http://localhost:8081/api/bundle";
  constructor(private httpClient: HttpClient) { }

  addData(bundle : any){
    return this.httpClient.post(this.apiUrl, bundle)
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

  updateData(bundle: any){
    return this.httpClient.put(this.apiUrl+"/"+bundle.id, bundle)
  }
}
