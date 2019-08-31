import { Component, OnInit } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent{

  constructor(private http: HttpClient) { }

  model = {
    pid: '',
    pname: '',
    quantity: '',
    price: '',
    ava: '',
  };

  submitted = false;

  onSubmit() { this.submitted = true; }

  method1(){
    this.http.get('http://127.0.0.1:3000/addstockdetails',{
      params: { pid: this.model.pid, pname: this.model.pname,quantity: this.model.quantity,
        price: this.model.price,ava: this.model.ava}
    }).subscribe((response) => {
      console.log('response here',response[0].addstockdetails);
    });
  }

  handleAvailableChange(e){
    console.log(e.target.value);

    this.model.ava = e.target.value;
  }


}
