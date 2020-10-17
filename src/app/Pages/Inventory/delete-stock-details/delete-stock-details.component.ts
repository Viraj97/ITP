import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const deletestockdetails:any;
@Component({
  selector: 'app-delete-stock-details',
  templateUrl: './delete-stock-details.component.html',
  styleUrls: ['./delete-stock-details.component.css']
})
export class DeleteStockDetailsComponent {

  constructor( private http: HttpClient) { }

  model = {
    NIC:''  
    
  };

  submitted = false;

  onSubmit(){ this.submitted = true;}

  method1(){
    this.http.get('http://127.0.0.1:3000/deletestocks',{
      params:{
        NIC:this.model.NIC}
  }).subscribe((Response) => {
    console.log('response here', Response[0].deletestocks);
  });
  }

  onclickdeletestock1(){
    deletestockdetails();
  }
}

  
