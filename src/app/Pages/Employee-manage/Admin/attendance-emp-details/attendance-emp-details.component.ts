import { Component, OnInit } from '@angular/core';

declare const validateAtten:any;
@Component({
  selector: 'app-attendance-emp-details',
  templateUrl: './attendance-emp-details.component.html',
  styleUrls: ['./attendance-emp-details.component.css']
})
export class AttendanceEmpDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickAtten(){
    validateAtten();
  }
}
