import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login/login.component';
import { HomeComponent } from './Pages/customer/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { BookingComponent } from './Pages/customer/booking/booking.component';
import { CustomerUpdateComponent } from './Pages/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './Pages/customer/customer-delete/customer-delete.component';
import { UpdateBookingComponent } from './Pages/customer/update-booking/update-booking.component';
import { DeleteBookingComponent } from './Pages/customer/delete-booking/delete-booking.component';
import { HeaderComponent } from './Components/header/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ManageEmpDetailsComponent } from './Pages/Employee/Admin/manage-emp-details/manage-emp-details.component';
import { UpdateEmpDetailsComponent } from './Pages/Employee/Admin/update-emp-details/update-emp-details.component';
import { DeleteEmpDetailsComponent } from './Pages/Employee/Admin/delete-emp-details/delete-emp-details.component';
import { WorkEmpDetailsComponent } from './Pages/Employee/Admin/work-emp-details/work-emp-details.component';
import { AttendanceEmpDetailsComponent } from './Pages/Employee/Admin/attendance-emp-details/attendance-emp-details.component';
import { InsertDailyShiftComponent } from './Pages/Maintanence/Admin/insert-daily-shift/insert-daily-shift.component';
import { InsertEquipmentComponent } from './Pages/Maintanence/Admin/insert-equipment/insert-equipment.component';
import { UpdateDailyShiftComponent } from './Pages/Maintanence/Admin/update-daily-shift/update-daily-shift.component';
import { DeleteDailyShiftComponent } from './Pages/Maintanence/Admin/delete-daily-shift/delete-daily-shift.component';
import { DeleteEquipmentComponent } from './Pages/Maintanence/Admin/delete-equipment/delete-equipment.component';
import { EquipmentUpdateCenterComponent } from './Pages/Maintanence/Admin/equipment-update-center/equipment-update-center.component';

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
    HeaderComponent,
    FooterComponent,
    ManageEmpDetailsComponent,
    UpdateEmpDetailsComponent,
    DeleteEmpDetailsComponent,
    WorkEmpDetailsComponent,
    AttendanceEmpDetailsComponent,
    InsertDailyShiftComponent,
    InsertEquipmentComponent,
    UpdateDailyShiftComponent,
    DeleteDailyShiftComponent,
    DeleteEquipmentComponent,
    EquipmentUpdateCenterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
