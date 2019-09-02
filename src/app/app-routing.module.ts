import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './Pages/login/login/login.component';
import { HomeComponent} from './Pages/customer/home/home.component';
import { BookingComponent} from './Pages/customer/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer/customer-delete/customer-delete.component';
import { AddDetailsComponent } from './Pages/restaurant/add-details/add-details.component';
import { StockDetailsComponent} from './Pages/restaurant/stock-details/stock-details.component';
import{DeleteDetailsComponent} from './Pages/restaurant/delete-details/delete-details.component';
import{TableBookingComponent} from './Pages/restaurant/table-booking/table-booking.component';
import{UpdateDetailsComponent} from './Pages/restaurant/update-details/update-details.component';
import { from } from 'rxjs';

// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'customerupdate', component: CustomerUpdateComponent},
  {path: 'customerdelete', component: CustomerDeleteComponent},
  {path: '', component: LoginComponent},
  {path: 'adddetails', component: AddDetailsComponent},
  {path: 'stockdetails',component: StockDetailsComponent},
  {path: 'deletedetails',component:DeleteDetailsComponent},
  {path: 'tablebooking',component:TableBookingComponent},
  {path: 'updatedetails',component:UpdateDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
