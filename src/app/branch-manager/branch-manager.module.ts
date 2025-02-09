import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { ProductAddComponent } from './components/Product/product-add/product-add.component';
import { ProductEditComponent } from './components/Product/product-edit/product-edit.component';
import { CategoryListComponent } from './components/Category/category-list/category-list.component';
import { BranchManagerRoutingModule } from './branch-manager-routing.module';
import { CategoryAddComponent } from './components/Category/category-add/category-add.component';
import { CategoryEditComponent } from './components/Category/category-edit/category-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BundleAddComponent } from './components/Promotion/Bundle/bundle-add/bundle-add.component';
import { BundleEditComponent } from './components/Promotion/Bundle/bundle-edit/bundle-edit.component';
import { BundleListComponent } from './components/Promotion/Bundle/bundle-list/bundle-list.component';
import { OfferAddComponent } from './components/Promotion/Offers/offer-add/offer-add.component';
import { OfferEditComponent } from './components/Promotion/Offers/offer-edit/offer-edit.component';
import { OfferListComponent } from './components/Promotion/Offers/offer-list/offer-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DamageAddComponent } from './components/Damage/damage-add/damage-add.component';
import { DamageEditComponent } from './components/Damage/damage-edit/damage-edit.component';
import { DamageListComponent } from './components/Damage/damage-list/damage-list.component';
import { BranchListManagerComponent } from './components/Branch/branch-list-manager/branch-list-manager.component';
import { ReturnListComponent } from './components/Return/return-list/return-list.component';
import { ReturnAddComponent } from './components/Return/return-add/return-add.component';
import { ReturnEditComponent } from './components/Return/return-edit/return-edit.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { StockAlertComponent } from './components/stock-alert/stock-alert.component';
import { EmployeeAddComponent } from './components/Employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/Employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/Employee/employee-list/employee-list.component';
import { PurchaseListComponent } from './components/Purchase/purchase-list/purchase-list.component';
import { PurchaseAddComponent } from './components/Purchase/purchase-add/purchase-add.component';
import { PurchaseEditComponent } from './components/Purchase/purchase-edit/purchase-edit.component';
import { SupplierListComponent } from './components/Supplier/supplier-list/supplier-list.component';
import { SupplierAddComponent } from './components/Supplier/supplier-add/supplier-add.component';
import { SupplierEditComponent } from './components/Supplier/supplier-edit/supplier-edit.component';
import { MemberAddComponent } from './components/Customer/member-add/member-add.component';
import { MemberEditComponent } from './components/Customer/member-edit/member-edit.component';
import { MemberListComponent } from './components/Customer/member-list/member-list.component';
import { SalesComponent } from './components/sales/sales.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    BundleAddComponent,
    BundleEditComponent,
    BundleListComponent,
    OfferAddComponent,
    OfferEditComponent,
    OfferListComponent,
    DamageAddComponent,
    DamageEditComponent,
    DamageListComponent,
    BranchListManagerComponent,
    ReturnListComponent,
    ReturnAddComponent,
    ReturnEditComponent,
    DashboardManagerComponent,
    StockAlertComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    PurchaseListComponent,
    PurchaseAddComponent,
    PurchaseEditComponent,
    SupplierListComponent,
    SupplierAddComponent,
    SupplierEditComponent,
    MemberAddComponent,
    MemberEditComponent,
    MemberListComponent,
    SalesComponent,
  ],
  imports: [
    CommonModule,
    BranchManagerRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    NgxPaginationModule
  ]
})
export class BranchManagerModule { }
