import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare const validateDelete: any;
@Component({
  selector: 'app-delete-emp-details',
  templateUrl: './delete-emp-details.component.html',
  styleUrls: ['./delete-emp-details.component.css']
})
export class DeleteEmpDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model = {
    id:''
    };

    submitted = false;

    onSubmit() {this.submitted = true;}

     method2(){
      this.http.get('http://127.0.0.1:3000/DeleteEmp',{
        params: {id : this.model.id}
      }).subscribe((response) => {
        console.log('response here', response[0].DeleteEmp);
      });
    }
  ngOnInit() {
  }

  onClickDelete(){
    validateDelete();
  }
}
