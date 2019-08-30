import { Component, OnInit } from '@angular/core';

declare const validateWork:any;
@Component({
  selector: 'app-work-emp-details',
  templateUrl: './work-emp-details.component.html',
  styleUrls: ['./work-emp-details.component.css']
})
export class WorkEmpDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickWork(){
    validateWork();
  }
}
