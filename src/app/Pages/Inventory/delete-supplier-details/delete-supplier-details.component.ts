import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-delete-supplier-details',
  templateUrl: './delete-supplier-details.component.html',
  styleUrls: ['./delete-supplier-details.component.css']
})
export class DeleteSupplierDetailsComponent {

  constructor( private http: HttpClient) { }

  model = {
    NIC:''
    
  };

  submitted = false;

  onSubmit(){ this.submitted = true;}

  method1(){
    this.http.get('http://127.0.0.1:3000/deletesupplier',{
      params:{
        NIC:this.model.NIC}
  }).subscribe((Response) => {
    console.log('response here', Response[0].deletesupplier);
  });
  }
}

  






