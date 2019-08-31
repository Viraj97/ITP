import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-delete-employee-detail',
  templateUrl: './delete-employee-detail.component.html',
  styleUrls: ['./delete-employee-detail.component.css']
})
export class DeleteEmployeeDetailComponent {

  constructor(private http: HttpClient) {}
    model={
      eid:'',
      bonus:'',
      loan:'',
   }

   submitted = false;
  
   onSubmit() {this.submitted = true;}
 
 method(){
   this.http.get('http://127.0.0.1:3000/delete',{
     params: {eid:this.model.eid,bonus:this.model.bonus,loan:this.model.loan
     }
   }).subscribe((response)=>{
     console.log('response',response[0].delete);
   });
 }
 


  ngOnInit() {
  }

}
