import { Component, OnInit } from '@angular/core';

declare const validateUpdate:any;
@Component({
  selector: 'app-update-emp-details',
  templateUrl: './update-emp-details.component.html',
  styleUrls: ['./update-emp-details.component.css']
})
export class UpdateEmpDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickU(){
    validateUpdate();
  }
}
