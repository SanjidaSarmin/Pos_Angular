import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
    private proService: ProductService
  ) { }


  productList: any[] = [];
  

  ngOnInit(): void {
    this.proService.getAllData().subscribe((val: any) => {
      this.productList = val
      this.updatePaginatedProducts();
    })
  }

   productNameControl = new FormControl('');
    selectedProduct: string = ''; 
    selectedProducts: any[] = [];
    filteredProducts: any[] = [];
    paginatedProducts: any[] = [];
    itemsPerPage: number = 10;
    currentPage: number = 0;
   totalItems: number = 0;
   totalPages: number = 1;
   pageSize: number = 10;


   searchProduct(): void {
    const searchTerm = this.productNameControl.value?.trim();
    if (!searchTerm) {
      alert('Please enter a product name to search.');
      return;
    }
  
    this.proService.searchProduct(searchTerm, this.currentPage, this.pageSize).subscribe(
      (val: any) => {
        if (val && val.content) {
          this.productList = val.content;
          this.totalItems = val.totalElements;
          this.totalPages = val.totalPages;
  
          // Ensure pagination works correctly
          this.currentPage = 1; // Reset to first page
          this.updatePaginatedProducts();
        } else {
          this.productList = [];
          this.totalItems = 0;
          this.totalPages = 1;
          this.paginatedProducts = [];
          console.error('Unexpected API response:', val);
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
        alert('Failed to fetch products. Please try again.');
      }
    );
  }
  updatePaginatedProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedProducts = this.productList.slice(start, start + this.itemsPerPage);
  }
  

  filterProducts() {
    const input = this.productNameControl.value?.toLowerCase().trim() || '';
    
    if (!input) {
      this.filteredProducts = [];
    } else {
      this.filteredProducts = this.productList?.filter(product => 
        product.name.toLowerCase().includes(input)
      ) || [];
    }
  }
  
  
    
    selectProduct(product: any) {
      const existingProduct = this.selectedProducts.find(
        (p) => p.code === product.code
      );
      if (!existingProduct) {
        this.selectedProducts.push({ ...product, quantity: 1 });
      } else {
        alert('Product is already in the list.');
      }
      this.productNameControl.setValue('');
      this.filteredProducts = []; 
    }
}
