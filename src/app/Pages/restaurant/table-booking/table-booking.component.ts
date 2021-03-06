import { Component, OnInit } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Component({
  selector: 'app-table-booking',
  templateUrl: './table-booking.component.html',
  styleUrls: ['./table-booking.component.css']
})
export class TableBookingComponent  {

  constructor(private http: HttpClient) { }

  model = {
    tn: '',
    nc: '',
    bd: '',
    price: '',
    ava: '',
  };

  submitted = false;

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.submitted = true;
    this.method1();
  }

  method1(){
    this.http.get('http://127.0.0.1:3000/tablebooking',{
      params: { tn: this.model.tn, nc: this.model.nc,bd: this.model.bd,
        price: this.model.price,ava: this.model.ava}
    }).subscribe((response) => {
      console.log('response here',response[0].tablebooking);
    });
  }

  handleAvailableChange(e){
    console.log(e.target.value);

    this.model.ava = e.target.value;
  }


}
