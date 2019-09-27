import { Component, OnInit } from '@angular/core';

declare const validateUpdateShift:any;

@Component({
  selector: 'app-update-daily-shift',
  templateUrl: './update-daily-shift.component.html',
  styleUrls: ['./update-daily-shift.component.css']
})
export class UpdateDailyShiftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickUpdate(){
    validateUpdateShift();
  }
  
  

}
