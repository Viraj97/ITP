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
import { VehicleComponent } from './Pages/Transport/vehicle/vehicle.component';
import { AvailableComponent } from './Pages/Transport/available/available.component';
import { UpdateComponent } from './Pages/Transport/update/update.component';
import { DeleteComponent } from './Pages/Transport/delete/delete.component';


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
    VehicleComponent,
    AvailableComponent,
    UpdateComponent,
    DeleteComponent
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
