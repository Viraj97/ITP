import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockDetailsComponent } from './Pages/Inventory/stock-details/stock-details.component';
import { SuplierDetailsComponent } from './Pages/Inventory/suplier-details/suplier-details.component';
import { DeleteStockDetailsComponent } from './Pages/Inventory/delete-stock-details/delete-stock-details.component';
import { UpdateStockDetailsComponent } from './Pages/Inventory/update-stock-details/update-stock-details.component';
import { UpdateSupplierDetailsComponent} from './Pages/Inventory/update-supplier-details/update-supplier-details.component';
import { DeleteSupplierDetailsComponent} from './Pages/Inventory/delete-supplier-details/delete-supplier-details.component';





import { from } from 'rxjs';
// tslint:disable-next-line:one-variable-per-declaration
const routes: Routes = [
  {path: '', component: StockDetailsComponent},
  {path: 'addsup', component: SuplierDetailsComponent},
  {path: 'deletesup', component: DeleteStockDetailsComponent},
  { path: 'updatestock', component: UpdateStockDetailsComponent},
  { path: 'updatesup', component: UpdateSupplierDetailsComponent},
  { path: 'deletesup', component: DeleteSupplierDetailsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
