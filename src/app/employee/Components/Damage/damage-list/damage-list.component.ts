import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DamageService } from 'src/app/Service/Damage/damage.service';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-damage-list',
  templateUrl: './damage-list.component.html',
  styleUrls: ['./damage-list.component.scss']
})
export class DamageListComponent implements OnInit{

  
  constructor(
    private damageService : DamageService,
    private productService : ProductService
   ){}

   
   damageList: any[] = [];
   productList: any[] = [];

  ngOnInit(): void {
     this.damageService.getAllData().subscribe((val : any) => {
      this.damageList = val  
      
    })

    this.productService.getAllData().subscribe((val : any) => {
      this.productList = val 
    })
  }


   damageNameControl = new FormControl('');
   selectedProducts: any[] = [];
   filteredproduct: any[] = [];
   paginatedProducts: any[] = [];
   currentPage: number = 0;
   itemsPerPage: number = 10;
   totalItems: number = 0;
   totalPages: number = 1;
   pageSize: number = 10;
 
   search() {
     this.damageService.searchDamage(this.damageNameControl.value || "", this.currentPage, this.pageSize).subscribe((val: any) => {
       console.log(val); 
       this.damageList = val.content || []; 
       this.totalItems = val.totalElements || 0; 
       this.totalPages = val.totalPages || 1;
       this.updatePaginatedCategory(); 
     });
   }
 
 
 
   updatePaginatedCategory(): void {
     const start = (this.currentPage - 1) * this.itemsPerPage;
     this.paginatedProducts = this.damageList.slice(start, start + this.itemsPerPage);
   }
 
   filterdamage() {
     const input = this.damageNameControl.value?.toLowerCase() || '';
     if (input.trim() === '') {
       this.filteredproduct = [];
     } else {
       this.filteredproduct = this.damageList.filter((damage) =>
        damage.productname.toLowerCase().includes(input)
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
     this.damageNameControl.setValue('');
     this.filteredproduct = [];
   }
 
 }