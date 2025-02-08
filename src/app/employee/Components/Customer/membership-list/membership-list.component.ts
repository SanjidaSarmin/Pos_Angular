import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/Service/Customer/customer.service';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.scss']
})
export class MembershipListComponent implements OnInit {
  constructor(
    private customerservice: CustomerService
  ) { }

  customerList: any[] = [];
  filteredCategories = [...this.customerList];

  ngOnInit(): void {
    this.customerservice.getAllData().subscribe((val: any) => {
      this.customerList = val
    })
  }

  deletecustomer(id: any) {
    this.customerservice.deleteById(id).subscribe((val: any) => {
      console.log("Data deleted");
      this.ngOnInit()
    })
  }

  customerNameControl = new FormControl('');
  selectedProducts: any[] = [];
  filteredcustomer: any[] = [];
  paginatedcustomer: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  totalPages: number = 1;
  pageSize: number = 10;

  search() {
    this.customerservice.search(this.customerNameControl.value || "", this.currentPage, this.pageSize).subscribe((val: any) => {
      console.log(val);
      this.customerList = val.content || [];
      this.totalItems = val.totalElements || 0;
      this.totalPages = val.totalPages || 1;
      this.updatePaginatedcustomer(); 
    });
  }



  updatePaginatedcustomer(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedcustomer = this.customerList.slice(start, start + this.itemsPerPage);
  }

  filtercustomer() {
    const input = this.customerNameControl.value?.toLowerCase() || '';
    if (input.trim() === '') {
      this.filteredcustomer = [];
    } else {
      this.filteredcustomer = this.customerList.filter((customer) =>
        customer.phoneNumber.toLowerCase().includes(input)
      );
    }
  }

  // Function to handle selecting a customer from the autocomplete list
  selectCustomer(customer: any) {
    const existingCustomer = this.selectedProducts.find(
      (p) => p.code === customer.code
    );
    if (!existingCustomer) {
      this.selectedProducts.push({ ...customer, quantity: 1 });
    } else {
      alert('Customer is already in the list.');
    }
    this.customerNameControl.setValue(''); // Clear search field after selection
    this.filteredcustomer = []; // Clear filtered customers
  }

}