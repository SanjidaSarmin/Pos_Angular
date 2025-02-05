import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { ProductAddComponent } from './components/Product/product-add/product-add.component';
import { ProductEditComponent } from './components/Product/product-edit/product-edit.component';
import { CategoryListComponent } from './components/Category/category-list/category-list.component';
import { CategoryAddComponent } from './components/Category/category-add/category-add.component';
import { CategoryEditComponent } from './components/Category/category-edit/category-edit.component';
import { BundleListComponent } from './components/Promotion/Bundle/bundle-list/bundle-list.component';
import { BundleAddComponent } from './components/Promotion/Bundle/bundle-add/bundle-add.component';
import { BundleEditComponent } from './components/Promotion/Bundle/bundle-edit/bundle-edit.component';
import { OfferAddComponent } from './components/Promotion/Offers/offer-add/offer-add.component';
import { OfferEditComponent } from './components/Promotion/Offers/offer-edit/offer-edit.component';
import { OfferListComponent } from './components/Promotion/Offers/offer-list/offer-list.component';
import { DamageListComponent } from './components/Damage/damage-list/damage-list.component';
import { DamageAddComponent } from './components/Damage/damage-add/damage-add.component';
import { DamageEditComponent } from './components/Damage/damage-edit/damage-edit.component';
import { BranchListManagerComponent } from './components/Branch/branch-list-manager/branch-list-manager.component';
import { ReturnListComponent } from './components/Return/return-list/return-list.component';
import { ReturnAddComponent } from './components/Return/return-add/return-add.component';
import { ReturnEditComponent } from './components/Return/return-edit/return-edit.component';
import { StockAlertComponent } from './components/stock-alert/stock-alert.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { EmployeeListComponent } from './components/Employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/Employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/Employee/employee-edit/employee-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: DashboardManagerComponent },

  // { path: "navbar", component:SidebarComponent },

  { path: "productlist", component: ProductListComponent },
  { path: "productAdd", component: ProductAddComponent },
  { path: 'productEdit/:pId', component: ProductEditComponent },

  { path: "employeelist", component: EmployeeListComponent},
  { path: "employeeAdd", component: EmployeeAddComponent },
  { path: 'employeeEdit/:eId', component: EmployeeEditComponent },

  { path: "categoryList", component: CategoryListComponent },
  { path: "categoryAdd", component: CategoryAddComponent },
  { path: "categoryEdit/:cId", component: CategoryEditComponent },

  { path: "bundleProduct", component: BundleListComponent },
  { path: "bundleAdd", component: BundleAddComponent },
  { path: "bundleEdit/:bId", component: BundleEditComponent },

  { path: "offerList", component: OfferListComponent },
  { path: "offerAdd", component: OfferAddComponent },
  { path: 'offerEdit/:oId', component: OfferEditComponent },

  { path: 'damageList', component: DamageListComponent },
  { path: 'damageAdd', component: DamageAddComponent },
  { path: 'damageEdit/:dId', component: DamageEditComponent },

  { path: 'return', component: ReturnListComponent },
  { path: 'returnAdd', component: ReturnAddComponent },
  { path: 'returnEdit/:rId', component: ReturnEditComponent },

  { path: 'branchList', component: BranchListManagerComponent },
  { path: "stockalert", component: StockAlertComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchManagerRoutingModule { }
