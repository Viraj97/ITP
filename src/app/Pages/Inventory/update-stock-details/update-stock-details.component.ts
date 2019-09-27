import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-stock-details',
  templateUrl: './update-stock-details.component.html',
  styleUrls: ['./update-stock-details.component.css']
})
export class UpdateStockDetailsComponent {

  constructor(private http: HttpClient) { }

  model = {
    NIC:'',
    telephone:'',
    supCategory:'',
    quantity:'',
    orderedDate:'',
    purchasedDate:'',
  };

  submitted = false;

  onSubmit(){ this.submitted = true;}

  method1(){
    this.http.get('http://127.0.0.1:3000/UpdateStockDetails',{
      params:{
        NIC:this.model.NIC,telephone:this.model.telephone,supCategory:this.model.supCategory,quantity:this.model.quantity,orderedDate:this.model.orderedDate,purchasedDate:this.model.purchasedDate}
  }).subscribe((Response) => {
    console.log('response here', Response[0].UpdateStockDetails);
  });
  }
}

  


