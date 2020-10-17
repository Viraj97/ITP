import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-suplier-details',
  templateUrl: './suplier-details.component.html',
  styleUrls: ['./suplier-details.component.css']
})
export class SuplierDetailsComponent {

  constructor(private http: HttpClient) { }

  model = {
    supname:'',
    supNIC:'',
    address:'',
    email:'',
    contactno:'',
    supcategory:'',
    description:''
  }

  method1(){
    this.http.get('http://127.0.0.1:3000/addsupplier',{
      params:{
        name:this.model.supname, NIC:this.model.supNIC, address:this.model.address,email:this.model.email,supcat:this.model.supcategory}
  }).subscribe((Response) => {
    console.log('response here', Response[0].addsupplier);
  });
  }

}
