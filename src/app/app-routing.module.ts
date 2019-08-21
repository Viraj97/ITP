import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './Pages/customer/home/home.component';
import { BookingComponent} from './Pages/customer/booking/booking.component';
// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'booking', component: BookingComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
