import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare const validate:any;
@Component({
  selector: 'app-manage-emp-details',
  templateUrl: './manage-emp-details.component.html',
  styleUrls: ['./manage-emp-details.component.css']
})
export class ManageEmpDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    id:'',
    name:'',
    NIC:'',
    age:'',
    Bdate:'',
    mobile:'',
    Jdate:'',
    Position:'',
    Password:'',
    gender:'',
    marry:''

  };

  submitted = false;

  onSubmit() {this.submitted = true;}

  method1(){
    this.http.get('http://127.0.0.1:3000/AddEmp',{
      params: {empId : this.model.id, empName:this.model.name, empNIC:this.model.NIC, empAge:this.model.age, empBdate:this.model.Bdate, empMobile:this.model.mobile, empJdate:this.model.Jdate, empPos:this.model.Position, empPass:this.model.Password, empGender:this.model.gender, empMarry:this.model.marry}
    }).subscribe((response) => {
      console.log('response here', response[0].AddEmp);
    });
  }
  ngOnInit() {
  }

  onClick(){
    validate();
  }
}
