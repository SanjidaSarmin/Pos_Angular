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



@NgModule({
  declarations: [
    SideNavbarComponent,
    BranchAddComponent,
    BranchEditComponent,
    BranchListComponent,
    MainPageComponent,
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
