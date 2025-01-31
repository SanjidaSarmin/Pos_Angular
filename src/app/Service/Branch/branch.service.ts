import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  constructor(private httpClient: HttpClient) { }
  
  private apiUrl = "http://localhost:8081/api/branch";
 
  addData(branch : any){
    return this.httpClient.post(this.apiUrl, branch)
  }

  getBranchData(){
    return this.httpClient.get(this.apiUrl)
  }

  getById(id: any){
    return this.httpClient.get(this.apiUrl +"/"+ id) 
  }

  deleteById(id:any){
    return this.httpClient.delete(this.apiUrl+"/"+ id)
  }

  updateData(branch: any){
    return this.httpClient.put(this.apiUrl+"/"+branch.id, branch)
  }
}
