import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit{

  
  constructor(
  private supplierService : SuppliersService
   ){}

   supplierList: any[] = [];

  ngOnInit(): void {
     this.supplierService.getAllData().subscribe((val : any) => {
      this.supplierList = val  
      
    })

  }
  deletesupplier(id: any) {
    this.supplierService.deleteById(id).subscribe((val: any) => {
      console.log("Data deleted");
      this.ngOnInit()
    })
  }



  name = new FormControl('');
  selectedSupplier: any[] = [];
  filteredSupplier: any[] = [];
  paginatedSupplier: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  totalPages: number = 1;

search() {
  this.supplierService.searchsupplier(this.name.value || "", this.currentPage, this.itemsPerPage).subscribe
  ((val: any) => {
    this.filteredSupplier = val.content || []; 
    this.totalItems = val.totalElements || 0; 
    this.totalPages = val.totalPages || 1;

    this.updatePaginatedSupplier(); 
    this.filterSupplier(); 
  });
}

updatePaginatedSupplier(): void {
  const start = this.currentPage * this.itemsPerPage;
  this.paginatedSupplier = this.supplierList.slice(start, start + this.itemsPerPage);
}

filterSupplier() {
  const input = this.name.value?.toLowerCase() || '';
  if (input.trim() === '') {
    this.filteredSupplier = [];
  } else {
    this.filteredSupplier = this.supplierList.filter((supplier) =>
      supplier.name?.toLowerCase().includes(input)
    );
  }
}


selectSupplier(supplier: any) {
  const existingSupplier = this.selectedSupplier.find(
    (s) => s.code === supplier.code
  );
  if (!existingSupplier) {
    this.selectedSupplier.push({ ...supplier });
  } else {
    alert('Supplier is already in the list.');
  }
  this.name.setValue('');
  this.filteredSupplier = [];
}
}