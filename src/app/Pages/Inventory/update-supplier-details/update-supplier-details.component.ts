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
    supname:'',
    supNIC:'',
    address:'',
    email:'',
    contactno:'',
    supcategory:'',
    description:''
  }

    submitted = false;

    onSubmit(){ this.submitted = true;}

    method1(){
      this.http.get('http://127.0.0.1:3000/UpdateSupplier',{
        params:{
          name:this.model.supname, NIC:this.model.supNIC, address:this.model.address,email:this.model.email,contactno:this.model.contactno,supcategory:this.model.supcategory,description:this.model.description}
    }).subscribe((Response) => {
      console.log('response here', Response[0].UpdateSupplier);
    });
    }
}
