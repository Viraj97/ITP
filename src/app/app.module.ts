import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
import { AddDetailsComponent } from './Pages/restaurant/add-details/add-details.component';
import { ResSideBarComponent } from './Components/sidebar/ResSideBar/res-side-bar/res-side-bar.component';
import { StockDetailsComponent } from './Pages/restaurant/stock-details/stock-details.component';
import { DeleteDetailsComponent } from './Pages/restaurant/delete-details/delete-details.component';
import { TableBookingComponent } from './Pages/restaurant/table-booking/table-booking.component';
import { UpdateDetailsComponent } from './Pages/restaurant/update-details/update-details.component';

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
    AddDetailsComponent,
    ResSideBarComponent,
    StockDetailsComponent,
    DeleteDetailsComponent,
    TableBookingComponent,
    UpdateDetailsComponent
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
