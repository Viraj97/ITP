import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
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
import { StockDetailsComponent } from './Pages/Inventory/stock-details/stock-details.component';
import { SuplierDetailsComponent } from './Pages/Inventory/suplier-details/suplier-details.component';
import { InventroySideBarComponent } from './Components/sidebar/inventory-sidebar/inventroy-side-bar/inventroy-side-bar.component';
import { UpdateStockDetailsComponent } from './Pages/Inventory/update-stock-details/update-stock-details.component';
import { DeleteStockDetailsComponent } from './Pages/Inventory/delete-stock-details/delete-stock-details.component';
import { UpdateSupplierDetailsComponent } from './Pages/Inventory/update-supplier-details/update-supplier-details.component';
import { DeleteSupplierDetailsComponent } from './Pages/Inventory/delete-supplier-details/delete-supplier-details.component';
import { HttpClient } from 'selenium-webdriver/http';
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
    HeaderComponent,
    FooterComponent,
    StockDetailsComponent,
    SuplierDetailsComponent,
    InventroySideBarComponent,
    UpdateStockDetailsComponent,
    DeleteStockDetailsComponent,
    UpdateSupplierDetailsComponent,
    DeleteSupplierDetailsComponent
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
