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



@NgModule({
  declarations: [
    SidebarComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    BranchManagerRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
  ]
})
export class BranchManagerModule { }
