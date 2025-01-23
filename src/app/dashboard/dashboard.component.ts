import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  selectedBranch = 'All Branches';
  selectedDate = new Date().toISOString().split('T')[0];

  totalSales = '594.00';
  instantPaid = '497.00';
  duePaid = '0.00';
  totalReturn = '0.00';

  salesHistory = [
    { date: '15 Jan, 2025', amount: '594.00' },
    { date: '14 Jan, 2025', amount: '15,379.45' },
    { date: '13 Jan, 2025', amount: '0.00' },
    { date: '12 Jan, 2025', amount: '0.00' },
    { date: '11 Jan, 2025', amount: '0.00' },
    { date: '10 Jan, 2025', amount: '0.00' },
    { date: '09 Jan, 2025', amount: '831.00' }
  ];

   // Arrays for Products & Balance section
   productsBalance = [
    { label: 'Total Products', value: 6062 },
    { label: 'Godown Products', value: 0 },
    { label: 'Godown Stock Value', value: 0.0 },
    { label: 'Opening Stock Value', value: 490850.0 },
    { label: 'Cash in Hand', value: 1096448.85 },
    { label: 'Cash at Bank', value: 52806.41 }
  ];

  // Arrays for Suppliers section
  suppliers = [
    { label: 'Total Suppliers', value: 16 },
    { label: 'Due Suppliers', value: 9 },
    { label: 'Suppliers Due', value: 1042429.43 }
  ];

 

  constructor() {}
  sellCustomerData: { value: string | number; label: string }[] = [];

  ngOnInit(): void { this.sellCustomerData = [
    { value: '6,084,465.48', label: 'Total Sales' },
    { value: '4,012,169.48', label: 'Total Collections' },
    { value: '6,333.81', label: 'Sales Due' },
    { value: '90,567.20', label: 'Current Year Sales' },
    { value: '56,449.35', label: 'Current Month Sales' },
    { value: 45, label: 'Total Customers' },
    { value: '15,633.81', label: 'Customers Due' },
    { value: '9,300.00', label: 'Opening Balance' },
  ];
}


fetchData() {
  // Simulated data fetch
  setTimeout(() => {
    this.productsBalance[0].value = 7000; // Updating total products
    this.suppliers[2].value = 1050000.0; // Updating suppliers due
  }, 1000);
}

activeDropdown: string | null = null;

toggleDropdown(menuId: string): void {
  this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
}
 
}
