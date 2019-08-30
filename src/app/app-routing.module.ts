import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Pages/login/login/login.component';
import { HomeComponent} from './Pages/customer/home/home.component';
import { BookingComponent} from './Pages/customer/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer/customer-delete/customer-delete.component';
import { UpdateBookingComponent } from './Pages/customer/update-booking/update-booking.component';
import { DeleteBookingComponent } from './Pages/customer/delete-booking/delete-booking.component';
// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'customerupdate', component: CustomerUpdateComponent},
  {path: 'customerdelete', component: CustomerDeleteComponent},
  {path: 'bookingupdate', component: UpdateBookingComponent},
  {path: 'bookingdelete', component: DeleteBookingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
