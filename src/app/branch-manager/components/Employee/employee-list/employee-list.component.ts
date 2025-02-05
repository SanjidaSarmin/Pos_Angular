import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/Service/Branch/branch.service';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private branchService: BranchService,
  ) { }


  employeeList: any[] = [];
  branches: any[] = [];
  categories: any[] = [];


  ngOnInit(): void {
    this.employeeService.getAllData().subscribe((val: any) => {
      this.employeeList = val
    })

    this.branchService.getBranchData().subscribe((val: any) => {
      this.branches = val
    })

  }

  deleteEmployee(id: any) {
    this.employeeService.deleteById(id).subscribe((val: any) => {
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
      this.paginatedProducts = this.employeeList.slice(start, start + this.itemsPerPage);
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
