import { Component, OnInit } from '@angular/core';

declare const validateUpdateEquipment:any;

@Component({
  selector: 'app-equipment-update-center',
  templateUrl: './equipment-update-center.component.html',
  styleUrls: ['./equipment-update-center.component.css']
})
export class EquipmentUpdateCenterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickUpdateEquipment(){
    validateUpdateEquipment();
  }
}
