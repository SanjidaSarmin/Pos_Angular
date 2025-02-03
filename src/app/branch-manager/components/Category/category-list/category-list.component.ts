import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/Service/category/category.service';



@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  constructor(
    private categoryservice: CategoryService
  ) { }

  catagoryList: any[] = [];
  filteredCategories = [...this.catagoryList];

  ngOnInit(): void {
    this.categoryservice.getAllData().subscribe((val: any) => {
      this.catagoryList = val
    })
  }

  deletecategory(id: any) {
    this.categoryservice.deleteById(id).subscribe((val: any) => {
      console.log("Data deleted");
      this.ngOnInit()
    })
  }

  categoryNameControl = new FormControl('');
  selectedProducts: any[] = [];
  filteredcategory: any[] = [];
  paginatedProducts: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  totalPages: number = 1;
  pageSize: number = 10;

  search() {
    this.categoryservice.searchCategories(this.categoryNameControl.value || "", this.currentPage, this.pageSize).subscribe((val: any) => {
      console.log(val); // Debugging: Check response structure
      this.catagoryList = val.content || [];  // Ensure content is correctly assigned
      this.totalItems = val.totalElements || 0; // Update total items
      this.totalPages = val.totalPages || 1;
      this.updatePaginatedCategory(); // Update total pages
    });
  }



  updatePaginatedCategory(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedProducts = this.catagoryList.slice(start, start + this.itemsPerPage);
  }

  filtercategory() {
    const input = this.categoryNameControl.value?.toLowerCase() || '';
    if (input.trim() === '') {
      this.filteredcategory = [];
    } else {
      this.filteredcategory = this.catagoryList.filter((product) =>
        product.name.toLowerCase().includes(input)
      );
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
    this.categoryNameControl.setValue('');
    this.filteredcategory = [];
  }

}