import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const validatestockdetails: any;

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent{

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
    this.http.get('http://127.0.0.1:3000/addStocks',{
      params:{
        NIC:this.model.NIC,telephone:this.model.telephone,supCategory:this.model.supCategory,quantity:this.model.quantity,orderedDate:this.model.orderedDate,purchasedDate:this.model.purchasedDate}
  }).subscribe((Response) => {
    console.log('response here', Response[0].addstocks);
  });
  }
  onClickInsertStock(){
    validatestockdetails();
  }
}
