import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEmployeeDetailComponent } from './Pages/Accounts/Admin/view-employee-detail/view-employee-detail.component';
import { AddEmployeeDetailComponent } from './Pages/Accounts/Admin/add-employee-detail/add-employee-detail.component';
import { UpdateEmployeeDetailComponent } from './Pages/Accounts/Admin/update-employee-detail/update-employee-detail.component';
import { DeleteEmployeeDetailComponent } from './Pages/Accounts/Admin/delete-employee-detail/delete-employee-detail.component' 

const routes: Routes = [

    {path: '', component: ViewEmployeeDetailComponent },
    {path: 'add-employee-detail', component: AddEmployeeDetailComponent},
    {path: 'update-employee-detail', component: UpdateEmployeeDetailComponent},
    {path: 'delete-employee-detail', component:DeleteEmployeeDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
