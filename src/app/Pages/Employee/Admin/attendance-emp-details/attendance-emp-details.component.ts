import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare const validateAtten:any;
@Component({
  selector: 'app-attendance-emp-details',
  templateUrl: './attendance-emp-details.component.html',
  styleUrls: ['./attendance-emp-details.component.css']
})
export class AttendanceEmpDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    aId:'',
    aDate:'',
    aStatus:''
    
  };

  submitted = false;

  onSubmit() {this.submitted = true;}

  method4(){
    this.http.get('http://127.0.0.1:3000/Attendance',{
      params: {aId : this.model.aId, aDate:this.model.aDate, aStatus:this.model.aStatus}
    }).subscribe((response) => {
      console.log('response here', response[0].Attendance);
    });
  }

  ngOnInit() {
  }

  onClickAtten(){
    validateAtten();
  }
}
