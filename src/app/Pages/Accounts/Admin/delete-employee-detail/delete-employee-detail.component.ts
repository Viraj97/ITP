import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const  validateEmpFDelete: any;

@Component({
  selector: 'app-delete-employee-detail',
  templateUrl: './delete-employee-detail.component.html',
  styleUrls: ['./delete-employee-detail.component.css']
})
export class DeleteEmployeeDetailComponent {

  constructor(private http: HttpClient) {}
    model={
      eid:''
   }

   submitted = false;
  
   onSubmit() {this.submitted = true;}
 
 method(){
   this.http.get('http://127.0.0.1:3000/deleteacc',{
     params: {eid:this.model.eid}
   }).subscribe((response)=>{
     console.log('response',response[0].deleteacc);
   });
 }
 


  ngOnInit() {
  }
  onClickEmpFDelete(){
    validateEmpFDelete();
  }
}
