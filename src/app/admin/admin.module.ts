import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SideNavbarComponent } from './Components/side-navbar/side-navbar.component';
import { BranchAddComponent } from './Components/Branch/branch-add/branch-add.component';
import { BranchEditComponent } from './Components/Branch/branch-edit/branch-edit.component';
import { BranchListComponent } from './Components/Branch/branch-list/branch-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { AdminSupplierAddComponent } from './Components/Supplier/admin-supplier-add/admin-supplier-add.component';
import { AdminSupplierEditComponent } from './Components/Supplier/admin-supplier-edit/admin-supplier-edit.component';

import { AdminSupplierListComponent } from './Components/Supplier/admin-supplier-list/admin-supplier-list.component';
import { AdminPurchaseListComponent } from './Components/Purchase/admin-purchase-list/admin-purchase-list.component';
import { AdminPurchaseEditComponent } from './Components/Purchase/admin-purchase-edit/admin-purchase-edit.component';
import { AdminPurchaseAddComponent } from './Components/Purchase/admin-purchase-add/admin-purchase-add.component';
import { AdminStockAlertComponent } from './Components/admin-stock-alert/admin-stock-alert.component';
import { ProductAddComponent } from './Components/Product/product-add/product-add.component';
import { ProductEditComponent } from './Components/Product/product-edit/product-edit.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { CategoryAddComponent } from './Components/Category/category-add/category-add.component';
import { CategoryEditComponent } from './Components/Category/category-edit/category-edit.component';
import { CategoryListComponent } from './Components/Category/category-list/category-list.component';
import { DamageListComponent } from './Components/Damage/damage-list/damage-list.component';
import { DamageAddComponent } from './Components/Damage/damage-add/damage-add.component';
import { DamageEditComponent } from './Components/Damage/damage-edit/damage-edit.component';
import { ReturnListComponent } from './Components/Return/return-list/return-list.component';
import { ReturnAddComponent } from './Components/Return/return-add/return-add.component';
import { ReturnEditComponent } from './Components/Return/return-edit/return-edit.component';



@NgModule({
  declarations: [
    SideNavbarComponent,
    BranchAddComponent,
    BranchEditComponent,
    BranchListComponent,
    MainPageComponent,
    AdminSupplierAddComponent,
    AdminSupplierEditComponent,
    AdminSupplierListComponent,
    AdminPurchaseListComponent,
    AdminPurchaseEditComponent,
    AdminPurchaseAddComponent,
    AdminStockAlertComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryListComponent,
    DamageListComponent,
    DamageAddComponent,
    DamageEditComponent,
    ReturnListComponent,
    ReturnAddComponent,
    ReturnEditComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
