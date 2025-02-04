import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideNavbarComponent } from './Components/side-navbar/side-navbar.component';
import { BranchListComponent } from './Components/Branch/branch-list/branch-list.component';
import { BranchAddComponent } from './Components/Branch/branch-add/branch-add.component';
import { BranchEditComponent } from './Components/Branch/branch-edit/branch-edit.component';
import { MainPageComponent } from './Components/main-page/main-page.component';

const routes: Routes = [
   { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
    { path: "mainpage", component: MainPageComponent },

    { path: "branchlist", component: BranchListComponent },
    { path: "branchAdd", component: BranchAddComponent },
    { path: 'BranchEdit/:bId', component: BranchEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
