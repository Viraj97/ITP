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
      params: {id : this.model.id, name:this.model.name, nic:this.model.NIC, age:this.model.age, Bdate:this.model.Bdate, mobile:this.model.mobile, Jdate:this.model.Jdate, position:this.model.Position, password:this.model.Password, gender:this.model.gender, marry:this.model.marry}
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
