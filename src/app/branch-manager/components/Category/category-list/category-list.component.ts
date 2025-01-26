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
     
     catagoryList: Category[] = [];
  
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
  
  searchTerm = '';
  filteredCategories = [...this.catagoryList];

  search() {
    this.filteredCategories = this.catagoryList.filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}