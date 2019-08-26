import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Pages/login/login/login.component';
import { HomeComponent} from './Pages/customer/home/home.component';
import { BookingComponent} from './Pages/customer/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer/customer-delete/customer-delete.component';

// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'customerupdate', component: CustomerUpdateComponent},
  {path: 'customerdelete', component: CustomerDeleteComponent},
  {path: 'login', component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
