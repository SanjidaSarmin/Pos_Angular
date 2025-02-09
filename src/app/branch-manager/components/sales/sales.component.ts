import { Component, OnInit } from '@angular/core';
import { SellService } from 'src/app/Service/Sell/sell.service';
import { SellItemService } from 'src/app/Service/SellItem/sell-item.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit{
    constructor(
      private sellService : SellService,
      private salesReportService: SellItemService
     ){}
     searchTerm = '';
     
     sellItem: any[] = [];
     formats = ['pdf', 'xls', 'docx', 'csv', 'html'];
    selectedFormat = 'pdf';
  
    ngOnInit(): void {
       this.sellService.getAllData().subscribe((val : any) => {
        this.sellItem = val  
      })
    }

    printInvoice(sellId: number) {
      if (!sellId || !this.selectedFormat) {
          alert('Please select a valid Sale ID and format.');
          return;
      }

      // Call the service to generate the report
      this.salesReportService.generateReport(sellId, this.selectedFormat).subscribe(response => {
          const blob = new Blob([response], { type: this.getMimeType(this.selectedFormat) });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `sales_invoice_${sellId}.${this.selectedFormat}`;
          a.click();
          window.URL.revokeObjectURL(url);
      }, error => {
          console.error('Error downloading report', error);
      });
  }

  // Helper function to get MIME type based on format
  private getMimeType(format: string): string {
      const types: { [key: string]: string } = {
          pdf: 'application/pdf',
          xls: 'application/vnd.ms-excel',
          docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          csv: 'text/csv',
          html: 'text/html'
      };
      return types[format] || 'application/octet-stream';
  }
  
  }
  

