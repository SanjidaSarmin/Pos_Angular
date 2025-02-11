import { BranchService } from './../../../Service/Branch/branch.service';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';
import { ReturnService } from 'src/app/Service/Return/return.service';
import { SellService } from 'src/app/Service/Sell/sell.service';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  selectedDate = new Date().toISOString().split('T')[0];

  totalSales: number = 0;
  totalSalesForMonth: number = 0;
  totalSalesForDay: number = 0;

  totalReturnsForMonth: number = 0;

  totalCustomers: number = 0;
  customersForMonth: number = 0;

  totalEmployees: number = 0;
  newEmployeesThisMonth: number = 0;

  totalProducts: number = 0;
  lowStockCount: number = 0;
  outOfStockCount: number = 0;

  totalSuppliers: number = 0;
  totalPurchase: number = 0;
  branchData : any[]=[]
  selectedBranch: string = '';
  

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

 

  constructor(private sellService: SellService,
      private returnService : ReturnService,
      private customerService : CustomerService,
      private employeeService : EmployeeService,
      private productService : ProductService,
      private supplierService : SuppliersService,
      private purchaseService : PurchaseService,
      private BranchService : BranchService
    ) {}
  
  sellCustomerData: { value: string | number; label: string }[] = [];

//   ngOnInit(): void { this.sellCustomerData = [
//     { value: '6,084,465.48', label: 'Total Sales' },
//     { value: '4,012,169.48', label: 'Total Collections' },
//     { value: '6,333.81', label: 'Sales Due' },
//     { value: '90,567.20', label: 'Current Year Sales' },
//     { value: '56,449.35', label: 'Current Month Sales' },
//     { value: 45, label: 'Total Customers' },
//     { value: '15,633.81', label: 'Customers Due' },
//     { value: '9,300.00', label: 'Opening Balance' },
//   ];
// }


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


ngOnInit(): void {
  this.getTotalSales();
  this.getTotalSalesForMonth();
  this.getTotalSalesForDay();

  this.getTotalReturnsForMonth();

  this.getTotalCustomers();
  this.getCustomersForMonth();

  this.getTotalEmployee();
  this.getEmployeeForMonth();

  this.getTotalProducts();
  this.productService.getLowStock().subscribe(data => {
    this.lowStockCount = data;
  });

  this.productService.getOutOfStockProducts().subscribe(data => {
    this.outOfStockCount = data;
  });

  this.supplierService.getTotalSupplier().subscribe(data => {
    this.totalSuppliers = data;
  });

  this.purchaseService.getPurchaseForMonth().subscribe(data => {
    this.totalPurchase = data;
  });
  
  this.BranchService.getBranchData().subscribe((val: any) => {
    this.branchData = val;
  });
 
}






getTotalSales(): void {
  this.sellService.getTotalSales().subscribe(
    (data) => {
      this.totalSales = data;
    },
    (error) => {
      console.error('Error fetching total sales:', error);
    }
  );
}

getTotalSalesForMonth(): void {
  this.sellService.getTotalSalesForMonth().subscribe(
    (data) => {
      this.totalSalesForMonth = data;
    },
    (error) => {
      console.error('Error fetching monthly sales:', error);
    }
  );
}

getTotalSalesForDay(): void {
  this.sellService.getTotalSalesForDay().subscribe(
    (data) => {
      this.totalSalesForDay = data;
    },
    (error) => {
      console.error('Error fetching daily sales:', error);
    }
  );
}

getTotalReturnsForMonth(): void {
  this.returnService.getTotalReturnsForMonth().subscribe(
    (data) => {
      this.totalReturnsForMonth = data;
    },
    (error) => {
      console.error('Error fetching monthly returns:', error);
    }
  );
}

getTotalCustomers(): void {
  this.customerService.getTotalCustomers().subscribe(
    (data) => {
      this.totalCustomers = data;
      
    },
    (error) => {
      console.error('Error fetching total customers:', error);
    }
  );
}

getCustomersForMonth(): void {
  this.customerService.getCustomersForMonth().subscribe(
    (data) => {
      this.customersForMonth = data;
    },
    (error) => {
      console.error('Error fetching customers this month:', error);
    }
  );
}

getTotalEmployee(): void {
  this.employeeService.getTotalEmployees().subscribe(
    (data) => {
      this.totalEmployees = data;
      
    },
    (error) => {
      console.error('Error fetching total customers:', error);
    }
  );
}

getEmployeeForMonth(): void {
  this.employeeService.getNewEmployeesThisMonth().subscribe(
    (data) => {
      this.newEmployeesThisMonth = data;
    },
    (error) => {
      console.error('Error fetching customers this month:', error);
    }
  );
}

getTotalProducts(): void {
  this.productService.getTotalProducts().subscribe(
    (data) => {
      this.totalProducts = data;
    },
    (error) => {
      console.error('Error fetching customers this month:', error);
    }
  );
}

 
}
