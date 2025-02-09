import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideNavbarComponent } from './Components/side-navbar/side-navbar.component';
import { BranchListComponent } from './Components/Branch/branch-list/branch-list.component';
import { BranchAddComponent } from './Components/Branch/branch-add/branch-add.component';
import { BranchEditComponent } from './Components/Branch/branch-edit/branch-edit.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { AdminSupplierListComponent } from './Components/Supplier/admin-supplier-list/admin-supplier-list.component';
import { AdminSupplierAddComponent } from './Components/Supplier/admin-supplier-add/admin-supplier-add.component';
import { AdminSupplierEditComponent } from './Components/Supplier/admin-supplier-edit/admin-supplier-edit.component';
import { AdminPurchaseListComponent } from './Components/Purchase/admin-purchase-list/admin-purchase-list.component';
import { AdminPurchaseAddComponent } from './Components/Purchase/admin-purchase-add/admin-purchase-add.component';
import { AdminPurchaseEditComponent } from './Components/Purchase/admin-purchase-edit/admin-purchase-edit.component';
import { AdminStockAlertComponent } from './Components/admin-stock-alert/admin-stock-alert.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { ProductAddComponent } from './Components/Product/product-add/product-add.component';
import { ProductEditComponent } from './Components/Product/product-edit/product-edit.component';
import { CategoryListComponent } from './Components/Category/category-list/category-list.component';
import { CategoryAddComponent } from './Components/Category/category-add/category-add.component';
import { CategoryEditComponent } from './Components/Category/category-edit/category-edit.component';
import { DamageListComponent } from './Components/Damage/damage-list/damage-list.component';
import { DamageAddComponent } from './Components/Damage/damage-add/damage-add.component';
import { DamageEditComponent } from './Components/Damage/damage-edit/damage-edit.component';
import { ReturnListComponent } from './Components/Return/return-list/return-list.component';
import { ReturnAddComponent } from './Components/Return/return-add/return-add.component';
import { ReturnEditComponent } from './Components/Return/return-edit/return-edit.component';
import { SalesComponent } from './Components/sales/sales.component';

const routes: Routes = [
  { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
  { path: "mainpage", component: MainPageComponent },
  { path: "stockalert", component: AdminStockAlertComponent },

  { path: "productlist", component: ProductListComponent },
  { path: "productAdd", component: ProductAddComponent },
  { path: 'productEdit/:pId', component: ProductEditComponent },

  { path: "categoryList", component: CategoryListComponent },
  { path: "categoryAdd", component: CategoryAddComponent },
  { path: "categoryEdit/:cId", component: CategoryEditComponent },

  { path: 'damageList', component: DamageListComponent },
  { path: 'damageAdd', component: DamageAddComponent },
  { path: 'damageEdit/:dId', component: DamageEditComponent },

  { path: 'return', component: ReturnListComponent },
    { path: 'returnAdd', component: ReturnAddComponent },
    { path: 'returnEdit/:rId', component: ReturnEditComponent },

  // { path: "employeelist", component: EmployeeListComponent},
  // { path: "employeeAdd", component: EmployeeAddComponent },
  // { path: 'employeeEdit/:eId', component: EmployeeEditComponent },


  { path: "branchlist", component: BranchListComponent },
  { path: "branchAdd", component: BranchAddComponent },
  { path: 'BranchEdit/:bId', component: BranchEditComponent },

  { path: "supplierlist", component: AdminSupplierListComponent },
  { path: "supplierAdd", component: AdminSupplierAddComponent },
  { path: 'supplierEdit/:sId', component: AdminSupplierEditComponent },

  { path: "purchaselist", component: AdminPurchaseListComponent },
  { path: "purchaseAdd", component: AdminPurchaseAddComponent },
  { path: 'purchaseEdit/:purId', component: AdminPurchaseEditComponent },

  { path: 'SalesDetails', component: SalesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
