import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';
import { ReturnService } from 'src/app/Service/Return/return.service';
import { SellService } from 'src/app/Service/Sell/sell.service';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.scss']
})
export class DashboardManagerComponent implements OnInit {
  selectedDate: string = new Date().toISOString().split('T')[0];
  constructor(private sellService: SellService,
    private returnService : ReturnService,
    private customerService : CustomerService,
    private employeeService : EmployeeService,
    private productService : ProductService,
    private supplierService : SuppliersService,
    private purchaseService : PurchaseService
  ) {}

  branchSalesHistory = [
    { date: '2025-02-01', amount: '$1,200' },
    { date: '2025-02-02', amount: '$1,500' },
    { date: '2025-02-03', amount: '$1,300' },
    { date: '2025-02-04', amount: '$1,800' },
    { date: '2025-02-05', amount: '$2,000' }
  ];


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
