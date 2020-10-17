import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

declare const validateEmpFDetails: any;
@Component({
  selector: 'app-add-employee-detail',
  templateUrl: './add-employee-detail.component.html',
  styleUrls: ['./add-employee-detail.component.css']
})
export class AddEmployeeDetailComponent implements OnInit {

  constructor(private http:HttpClient) { }

  model={
    eid:'',
    salary:'',
    bonus:'',
    loan:'',
  };

  submitted = false;
  
  onSubmit() {this.submitted = true;}

method(){
  this.http.get('http://127.0.0.1:3000/add',{
    params: {eid:this.model.eid,salary:this.model.salary,bonus:this.model.bonus,loan:this.model.loan
    }
  }).subscribe((response)=>{
    console.log('response',response[0].add);
  });
}

  ngOnInit() {
  }

  onClickFDetails(){
    validateEmpFDetails();
  }

}
