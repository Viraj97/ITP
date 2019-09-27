import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const validateDeleteEquipment:any;

@Component({
  selector: 'app-delete-equipment',
  templateUrl: './delete-equipment.component.html',
  styleUrls: ['./delete-equipment.component.css']
})
export class DeleteEquipmentComponent implements OnInit {

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
      params: { NIC: this.model2.NIC }
    }).subscribe((response) => {
      console.log('response here', response[0].deletedailyshift);
    });
  }

  onClickDeleteEquipment(){
    validateDeleteEquipment();
  }
}