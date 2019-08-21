import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< Updated upstream
import { HomeComponent} from './Pages/customer/home/home.component';
import { BookingComponent} from './Pages/customer/booking/booking.component';
// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'booking', component: BookingComponent}
];
=======

const routes: Routes = [];

>>>>>>> Stashed changes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
