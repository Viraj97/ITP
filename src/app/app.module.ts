import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login/login.component';
import { HomeComponent } from './Pages/customer/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';


import { HeaderComponent } from './Components/header/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ManageEmpDetailsComponent } from './Pages/Employee-manage/Admin/manage-emp-details/manage-emp-details.component';
import { UpdateEmpDetailsComponent } from './Pages/Employee-manage/Admin/update-emp-details/update-emp-details.component';
import { DeleteEmpDetailsComponent } from './Pages/Employee-manage/Admin/delete-emp-details/delete-emp-details.component';
import { AttendanceEmpDetailsComponent } from './Pages/Employee-manage/Admin/attendance-emp-details/attendance-emp-details.component';
import { WorkEmpDetailsComponent } from './Pages/Employee-manage/Admin/work-emp-details/work-emp-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewEmpDetailsComponent } from './Pages/Employee-manage/Employee/view-emp-details/view-emp-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    
    
    HeaderComponent,
    FooterComponent,
    ManageEmpDetailsComponent,
    UpdateEmpDetailsComponent,
    DeleteEmpDetailsComponent,
    AttendanceEmpDetailsComponent,
    WorkEmpDetailsComponent,
    ViewEmpDetailsComponent,

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
