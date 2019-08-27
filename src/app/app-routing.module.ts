import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './Pages/Transport/vehicle/vehicle.component';
import { UpdateComponent } from './Pages/Transport/update/update.component';
import { DeleteComponent } from './Pages/Transport/delete/delete.component';
import { AvailableComponent } from './Pages/Transport/available/available.component'

import { from } from 'rxjs';
const routes: Routes = [
{path:'',component:VehicleComponent},
{path: 'update', component:UpdateComponent},
{path: 'delete', component:DeleteComponent},
{path: 'available', component:AvailableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
