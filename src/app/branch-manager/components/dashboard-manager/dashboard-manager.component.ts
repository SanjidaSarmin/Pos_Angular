import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.scss']
})
export class DashboardManagerComponent implements OnInit {
  selectedDate: string = new Date().toISOString().split('T')[0];

  branchTotalSales: number = 0;
  branchInstantPaid: number = 0;
  branchDuePaid: number = 0;
  branchTotalReturn: number = 0;

  branchSellCustomerData = [
    { value: 120, label: 'Total Customers' },
    { value: 85, label: 'New Customers' },
    { value: 35, label: 'Returning Customers' }
  ];

  branchProductsBalance = [
    { value: 500, label: 'Total Products' },
    { value: 120, label: 'Low Stock' },
    { value: 30, label: 'Out of Stock' }
  ];

  branchSuppliers = [
    { value: 20, label: 'Active Suppliers' },
    { value: 5, label: 'New Suppliers' }
  ];

  branchSalesHistory = [
    { date: '2025-02-01', amount: '$1,200' },
    { date: '2025-02-02', amount: '$1,500' },
    { date: '2025-02-03', amount: '$1,300' },
    { date: '2025-02-04', amount: '$1,800' },
    { date: '2025-02-05', amount: '$2,000' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.fetchBranchData();
  }

  fetchBranchData(): void {
    // Here, you can make an API call to fetch actual branch data.
    this.branchTotalSales = 5000;
    this.branchInstantPaid = 3000;
    this.branchDuePaid = 1500;
    this.branchTotalReturn = 500;
  }

}
