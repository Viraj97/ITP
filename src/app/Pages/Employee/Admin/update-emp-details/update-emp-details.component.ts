import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare const validateUpdate:any;
declare const validateEdit:any;
@Component({
  selector: 'app-update-emp-details',
  templateUrl: './update-emp-details.component.html',
  styleUrls: ['./update-emp-details.component.css']
})
export class UpdateEmpDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    id:''
    };

    submitted = false;

    onSubmit() {this.submitted = true;}
  
    method3(){
      this.http.get('http://127.0.0.1:3000/EditEmp',{
        params: {id : this.model.id}
      }).subscribe((response) => {
        console.log('response here', response[0].EditEmp);
      });
    }

  ngOnInit() {
  }

  onClickU(){
    validateUpdate();
  }
  onClickE(){
    validateEdit();
  }
}
