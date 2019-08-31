import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-supplier-details',
  templateUrl: './update-supplier-details.component.html',
  styleUrls: ['./update-supplier-details.component.css']
})
export class UpdateSupplierDetailsComponent{

  constructor(private http: HttpClient) { }

  model = {
    name:'',
    address:'',
    NIC:'',
    telephone:'',
    email:'',
    supCategory:'',
  };
    submitted = false;

    onSubmit(){ this.submitted = true;}

    method1(){
      this.http.get('http://127.0.0.1:3000/UpdateSupplier',{
        params:{
          name:this.model.name,address:this.model.address,NIC:this.model.NIC,telephone:this.model.telephone,email:this.model.email,supCategory:this.model.supCategory}
    }).subscribe((Response) => {
      console.log('response here', Response[0].UpdateSupplier);
    });
    }
}
