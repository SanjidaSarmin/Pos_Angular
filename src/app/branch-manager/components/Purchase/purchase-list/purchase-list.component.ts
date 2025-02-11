import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/Service/Branch/branch.service';
import { PaymentService } from 'src/app/Service/Payment/payment.service';
import { PurchaseReportService } from 'src/app/Service/purchase-report.service';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  constructor(
    private purchaseService: PurchaseService,
    private branchService: BranchService,
    private supplierService: SuppliersService,
    private paymentService: PaymentService,
    private purcahseReportService : PurchaseReportService
  ) { }


  purchaseList: any[] = [];
  branchelist: any[] = [];
  supplierList: any[] = [];
  paymentList: any[] = [];

  formats = ['pdf', 'xls', 'docx', 'csv', 'html'];
  selectedFormat = 'pdf';


  ngOnInit(): void {
    this.purchaseService.getAllData().subscribe((val: any) => {
      this.purchaseList = val
    })

    this.branchService.getBranchData().subscribe((val: any) => {
      this.branchelist = val
    })
    this.supplierService.getAllData().subscribe((val: any) => {
      this.supplierList = val
    })
    this.paymentService.getAllData().subscribe((val: any) => {
      this.paymentList = val
    })
    

  }

  

 

//   productNameControl = new FormControl('');
//       selectedProduct: string = ''; 
//       selectedProducts: any[] = [];
//       filteredProducts: any[] = [];
      paginatedProducts: any[] = [];
      currentPage = 1;
      itemsPerPage: number = 10;

// searchProduct(): void {
//       const searchTerm = this.productNameControl.value?.trim();
//       if (!searchTerm) {
//         alert('Please enter a product name to search.');
//         return;
//       }
//       this.proService.searchProduct(searchTerm).subscribe((val: any) => {
//         this.productList = val;
//         this.currentPage = 1; // Reset to the first page
//         this.updatePaginatedProducts(); // Update the displayed products
//       });
//     }
    updatePaginatedProducts(): void {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      this.paginatedProducts = this.purchaseList.slice(start, start + this.itemsPerPage);
    }

//     filterProducts() {
//       const input = this.productNameControl.value?.toLowerCase() || '';
//       if (input.trim() === '') {
//         this.filteredProducts = [];
//       } else {
//         this.filteredProducts = this.productList.filter((product) =>
//           product.name.toLowerCase().includes(input)
//         );
//       }
//     }
  
    
//     selectProduct(product: any) {
//       const existingProduct = this.selectedProducts.find(
//         (p) => p.code === product.code
//       );
//       if (!existingProduct) {
//         this.selectedProducts.push({ ...product, quantity: 1 });
//       } else {
//         alert('Product is already in the list.');
//       }
//       this.productNameControl.setValue('');
//       this.filteredProducts = []; 
//     }

printInvoice(purchaseId: number) {
  if (!purchaseId || !this.selectedFormat) {
      alert('Please select a valid Sale ID and format.');
      return;
  }

  // Call the service to generate the report
  this.purcahseReportService.generateReport(purchaseId, this.selectedFormat).subscribe(response => {
      const blob = new Blob([response], { type: this.getMimeType(this.selectedFormat) });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sales_invoice_${purchaseId}.${this.selectedFormat}`;
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
