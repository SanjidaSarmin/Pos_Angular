import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent {

  search(): void {
    console.log('Search Term:', this.searchTerm);
    // Add your search logic here
  }
  
entriesToShow = 10;
  searchTerm = '';
  suppliers = [
    { name: 'Abul Mia', company: 'Pran RFL', phone: '52524152415', address: 'Shah Ali Plaza' },
    { name: 'Aci', company: 'Aci', phone: '01716382864', address: 'Rangpur' },
    { name: 'Alam', company: 'Somota - Hafiz Tower', phone: '615616515615', address: 'sdfsf' },
    { name: 'Alam Bhai', company: 'Somota - Pyramid Neer', phone: '0156545494556', address: 'sdfsdf' },
    { name: 'Alam Mia', company: 'Samata', phone: '019785415645456', address: 'sdfsfsdfsdf' },
    { name: 'Babul Mia', company: 'Comilla Khadi', phone: '01628382866', address: 'Dhaka' },
    { name: 'Della', company: 'HP', phone: '85475858525885', address: 'Dhaka' }
  ];

  filteredSuppliers() {
    return this.suppliers.filter(
      supplier =>
        supplier.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        supplier.company.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        supplier.phone.includes(this.searchTerm) ||
        supplier.address.toLowerCase().includes(this.searchTerm.toLowerCase())
    ).slice(0, this.entriesToShow);
  }

  selectedDate: string = '';

filterByDate(): void {
  console.log('Selected Date:', this.selectedDate);
  // Add filtering logic for the selected date here
}

}