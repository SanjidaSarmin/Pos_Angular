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
