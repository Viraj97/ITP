import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const validateDeleteShift:any;

@Component({
  selector: 'app-delete-daily-shift',
  templateUrl: './delete-daily-shift.component.html',
  styleUrls: ['./delete-daily-shift.component.css']
})
export class DeleteDailyShiftComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model2 = {
    NIC: '',
  };
  submitted = false;

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  method2() {
    this.http.get('http://127.0.0.1:3000/deletedailyshift', {
      params: { nic: this.model2.NIC }
    }).subscribe((response) => {
      console.log('response here', response[0].deletedailyshift);
    });
  }

  onClickDelete(){
    validateDeleteShift();
  }
  
}
