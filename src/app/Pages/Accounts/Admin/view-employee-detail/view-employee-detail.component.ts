import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-view-employee-detail',
  templateUrl: './view-employee-detail.component.html',
  styleUrls: ['./view-employee-detail.component.css']
})
export class ViewEmployeeDetailComponent implements OnInit {

  constructor(private http:HttpClient) { }

  model={
    eid:'',
  };

  submitted = false;

  onSubmit() {this.submitted = true;}

  method(){
    this.http.get('http://127.0.0.1:3000/view',{
      params: {eid:this.model.eid}
    }).subscribe((response)=>{
      console.log('response',response[0].view);
    });
  }

  ngOnInit() {
  }

}
