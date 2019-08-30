import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insert-equipment',
  templateUrl: './insert-equipment.component.html',
  styleUrls: ['./insert-equipment.component.css']
})
export class InsertEquipmentComponent {

  constructor() { }

  // model = {
  //   NIC:'',
  //   date:'',
  //   quantity:'',
  //   price:'',
  // };

  // submitted = false;

  // onSubmit() { this.submitted = true; }

  // method1(){
  //   this.http.get('http://127.0.0.1:3000/ ',{
  //     params: { NIC: this.model.NIC, date: this.model.date,
  //       quantity: this.model.quantity, price: this.model.price }
  //   }).subscribe((response) => {
  //     console.log('response here', response[0].);
  //   });
  // }
}
