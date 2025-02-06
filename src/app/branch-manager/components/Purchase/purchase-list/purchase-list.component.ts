import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/Service/Branch/branch.service';
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
    private supplierService: SuppliersService
  ) { }


  purchaseList: any[] = [];
  branches: any[] = [];
  categories: any[] = [];


  ngOnInit(): void {
    this.purchaseService.getAllData().subscribe((val: any) => {
      this.purchaseList = val
    })

    this.branchService.getBranchData().subscribe((val: any) => {
      this.branches = val
    })
    this.supplierService.getAllData().subscribe((val: any) => {
      this.branches = val
    })

  }

  deletepurchase(id: any) {
    this.purchaseService.deleteById(id).subscribe((val: any) => {
      console.log("Data deleted");
      this.ngOnInit()
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
}
