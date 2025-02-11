import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseReportService {

   constructor(private httpClient: HttpClient) { }
   
   private apiUrl = 'http://localhost:8081/purchase/download';
   generateReport(purchaseId: number, format: string) {
    const url = `${this.apiUrl}?format=${format}&purchaseId=${purchaseId}`;
    return this.httpClient.get(url, { responseType: 'blob' });
  }

}
