import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HomeComponent} from './Pages/customer/home/home.component';
//import { BookingComponent} from './Pages/customer/booking/booking.component';
import { ManageEmpDetailsComponent } from './Pages/Employee-manage/Admin/manage-emp-details/manage-emp-details.component';
import { UpdateEmpDetailsComponent } from './Pages/Employee-manage/Admin/update-emp-details/update-emp-details.component';
import { DeleteEmpDetailsComponent } from './Pages/Employee-manage/Admin/delete-emp-details/delete-emp-details.component';
import { AttendanceEmpDetailsComponent } from './Pages/Employee-manage/Admin/attendance-emp-details/attendance-emp-details.component';
import { WorkEmpDetailsComponent } from './Pages/Employee-manage/Admin/work-emp-details/work-emp-details.component';
import { ViewEmpDetailsComponent } from './Pages/Employee-manage/Employee/view-emp-details/view-emp-details.component';


// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  {path: '', component: ManageEmpDetailsComponent},
  {path: 'update-emp-details', component: UpdateEmpDetailsComponent},
  {path: 'delete-emp-details', component: DeleteEmpDetailsComponent},
  {path: 'attendance-emp-details', component: AttendanceEmpDetailsComponent},
  {path: 'work-emp-details', component: WorkEmpDetailsComponent},
  {path: 'view-emp-details', component: ViewEmpDetailsComponent}
];


//const routes: Routes = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
