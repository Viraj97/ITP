import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


declare const validateEquipment:any;


@Component({
  selector: 'app-insert-equipment',
  templateUrl: './insert-equipment.component.html',
  styleUrls: ['./insert-equipment.component.css']
})
export class InsertEquipmentComponent {

  constructor(private http: HttpClient) { }

  model = {
    eqp:'',
    date:'',
    quantity:'',
    price:'',
  };

  submitted = false;

  onSubmit() {     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  this.submitted = true;
  this.method1(); }

  method1(){
    this.http.get('http://127.0.0.1:3000/insertequipment ',{
      params: { NIC: this.model.eqp, date: this.model.date,
        quantity: this.model.quantity, price: this.model.price }
    }).subscribe((response) => {
      console.log('response here', response[0].insertequipment);
    });
  }
  handleAvailableChange(e){
    console.log(e.target.value);

    this.model.eqp = e.target.value;
}

onClickEquipment(){
  validateEquipment();
}
}