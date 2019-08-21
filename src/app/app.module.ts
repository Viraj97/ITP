import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login/login.component';
import { HomeComponent } from './Pages/customer/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
<<<<<<< Updated upstream
import { BookingComponent } from './Pages/customer/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer/customer-delete/customer-delete.component';
import { UpdateBookingComponent } from './Pages/customer/update-booking/update-booking.component';
import { DeleteBookingComponent } from './Pages/customer/delete-booking/delete-booking.component';
import { HeaderComponent } from './Components/header/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
=======
import { BookingComponent } from './Pages/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer-delete/customer-delete.component';
import { UpdateBookingComponent } from './Pages/update-booking/update-booking.component';
import { DeleteBookingComponent } from './Pages/delete-booking/delete-booking.component';
import { ManageEmpDetailsComponent } from './Pages/Employee/Admin/manage-emp-details/manage-emp-details.component';
import { UpdateEmpDetailsComponent } from './Pages/Employee/Admin/update-emp-details/update-emp-details.component';
import { DeleteEmpDetailsComponent } from './Pages/Employee/Admin/delete-emp-details/delete-emp-details.component';
import { AttendanceEmpDetailsComponent } from './Pages/Employee/Admin/attendance-emp-details/attendance-emp-details.component';
import { WorkEmpDetailsComponent } from './Pages/Employee/Admin/work-emp-details/work-emp-details.component';
import { EmpHomeComponent } from './Pages/Employee/Admin/emp-home/emp-home.component';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    HeaderComponent,
    FooterComponent
=======
    ManageEmpDetailsComponent,
    UpdateEmpDetailsComponent,
    DeleteEmpDetailsComponent,
    AttendanceEmpDetailsComponent,
    WorkEmpDetailsComponent,
    EmpHomeComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
