import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BranchService } from 'src/app/Service/Branch/branch.service';

@Component({
  selector: 'app-employee-branch-list',
  templateUrl: './employee-branch-list.component.html',
  styleUrls: ['./employee-branch-list.component.scss']
})
export class EmployeeBranchListComponent implements OnInit{

  
  constructor(
  private branchService : BranchService
   ){}

   branchList: any[] = [];

  ngOnInit(): void {
     this.branchService.getBranchData().subscribe((val : any) => {
      this.branchList = val  
      
    })

  }


   NameControl = new FormControl('');
   selectedBranch: any[] = [];
   filteredBranch: any[] = [];
   paginatedbranch: any[] = [];
   currentPage: number = 0;
   itemsPerPage: number = 10;
   totalItems: number = 0;
   totalPages: number = 1;
   pageSize: number = 10;
 
   search() {
     this.branchService.searchBranch(this.NameControl.value || "", this.currentPage, this.pageSize).subscribe((val: any) => {
       console.log(val); 
       this.branchList = val.content || []; 
       this.totalItems = val.totalElements || 0; 
       this.totalPages = val.totalPages || 1;
       this.updatePaginatedCategory(); 
     });
   }
 
 
 
   updatePaginatedCategory(): void {
     const start = (this.currentPage - 1) * this.itemsPerPage;
     this.paginatedbranch = this.branchList.slice(start, start + this.itemsPerPage);
   }
 
   filterBranch() {
     const input = this.NameControl.value?.toLowerCase() || '';
     if (input.trim() === '') {
       this.filteredBranch = [];
     } else {
       this.filteredBranch = this.branchList.filter((branch) =>
        branch.location.toLowerCase().includes(input)
       );
     }
   }
 
 
   selectProduct(branch: any) {
     const existingProduct = this.selectedBranch.find(
       (p) => p.code === branch.code
     );
     if (!existingProduct) {
       this.selectedBranch.push({ ...branch, quantity: 1 });
     } else {
       alert('Branch is already in the list.');
     }
     this.NameControl.setValue('');
     this.filteredBranch = [];
   }
 
 }