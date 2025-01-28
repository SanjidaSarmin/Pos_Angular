import { Component, OnInit } from '@angular/core';
import { CatagoryService } from 'src/app/employee/Service/Catagory/catagory.service';
import { Category } from 'src/app/Models/Catagory';

@Component({
  selector: 'app-product-catagory',
  templateUrl: './product-catagory.component.html',
  styleUrls: ['./product-catagory.component.scss']
})
export class ProductCatagoryComponent implements OnInit{
    constructor(
      private catagoryservice : CatagoryService
     ){}

    
 searchTest :string = "";
  search() {
    this.catagoryservice.serarchCategpry(this.searchTest).subscribe((val: any) => {
      this.catagoryList = val
    })
  }
     
     catagoryList: Category[] = [];
  
    ngOnInit(): void {
       this.catagoryservice.getAllData().subscribe((val : any) => {
        this.catagoryList = val  
      })
    }
  
    // deletereturn(id : any){
    //   this.catagoryservice.deleteById(id).subscribe((val : any) =>{
    //     console.log("Data deleted");
    //     this.ngOnInit()
    //   })
    //  }
  
 
  filteredCategories = [...this.catagoryList];

  
}