import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { BookingComponent } from './Pages/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer-delete/customer-delete.component';
import { UpdateBookingComponent } from './Pages/update-booking/update-booking.component';
import { DeleteBookingComponent } from './Pages/delete-booking/delete-booking.component';
import { ViewEmployeeDetailComponent } from './Pages/Accounts/Admin/view-employee-detail/view-employee-detail.component';
import { AddEmployeeDetailComponent } from './Pages/Accounts/Admin/add-employee-detail/add-employee-detail.component';
import { UpdateEmployeeDetailComponent } from './Pages/Accounts/Admin/update-employee-detail/update-employee-detail.component';
import { DeleteEmployeeDetailComponent } from './Pages/Accounts/Admin/delete-employee-detail/delete-employee-detail.component';
import { AccountsSidebarComponent } from './Components/sidebar/accounts-sidebar/accounts-sidebar.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    BookingComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    UpdateBookingComponent,
    DeleteBookingComponent,
    ViewEmployeeDetailComponent,
    AddEmployeeDetailComponent,
    UpdateEmployeeDetailComponent,
    DeleteEmployeeDetailComponent,
    AccountsSidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
