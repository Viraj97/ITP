import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'

declare const validateShift:any;
@Component({
  selector: 'app-insert-daily-shift',
  templateUrl: './insert-daily-shift.component.html',
  styleUrls: ['./insert-daily-shift.component.css']
})
export class InsertDailyShiftComponent{

  constructor(private http: HttpClient) { }

  model = {
    NIC:'',
    time:'',
    date:'',
    section:'',
    position:'',


  };

  submitted = false;

  onSubmit() {     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  this.submitted = true;
  this.method(); }

  method(){
    this.http.get('http://127.0.0.1:3000/insertdaily',{
      params: { NIC: this.model.NIC, time: this.model.time, date: this.model.date,section: this.model.section, position: this.model.position}
    }).subscribe((response) => {
      console.log('response here', response[0].insertdaily);
    });
  }
  handleAvailableChange(e){
    console.log(e.target.value);

    this.model.NIC = e.target.value;
}

onClickShift(){
  validateShift();
}

}
