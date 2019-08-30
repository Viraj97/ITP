import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
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

  onSubmit() { this.submitted = true; }

  method(){
    this.http.get('http://127.0.0.1:3000/insertdailyshift ',{
      params: { NIC: this.model.NIC, time: this.model.time, date: this.model.date,
        section: this.model.date, position: this.model.position }
    }).subscribe((response) => {
      console.log('response here', response[0].insertdailyshift);
    });
  }
}
 
