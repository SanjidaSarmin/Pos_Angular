import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/branch-manager/Service/category/category.service';
import { Category } from 'src/app/Models/Catagory';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{
    constructor(
      private catagoryservice : CategoryService
     ){}
     
     catagoryList: any[] = [];
  
    ngOnInit(): void {
       this.catagoryservice.getAllData().subscribe((val : any) => {
        this.catagoryList = val  
      })
    }
  
    deletecategory(id : any){
      this.catagoryservice.deleteById(id).subscribe((val : any) =>{
        console.log("Data deleted");
        this.ngOnInit()
      })
     }
  
     
  filteredCategories = [...this.catagoryList];

  searchTest = ''; 
  currentPage: number = 0;  
  pageSize: number = 10;   
  totalItems: number = 0;
  totalPages: number = 0;  
  
  search(name: string = this.searchTest, description: string = '', page: number = this.currentPage, size: number = this.pageSize): void {
    console.log(`Searching with name: ${name}, description: ${description}, page: ${page}, size: ${size}`);
  
    this.catagoryservice.searchCategories(name, description, page, size).subscribe(response => {
      console.log('API Response:', response);  // Log the response to see if filtering is applied
  
      this.catagoryList = response.content;  
      this.totalItems = response.totalElements;  
      this.totalPages = response.totalPages;  
  
    }, error => {
      console.error('Error fetching categories:', error);
    });
  }
  

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.search();
    }
  }
  

}