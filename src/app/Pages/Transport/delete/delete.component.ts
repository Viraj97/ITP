import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
declare const vdelete:any;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }

  model2 = {
    id: '',
  };
  submitted = false;

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  method2() {
    this.http.get('http://127.0.0.1:3000/deletevehicle', {
      params: { VehicleID: this.model2.id}
    }).subscribe((response) => {
      console.log('response here', response[0].deletevehicle);
    });
  }

  onclick(){
    vdelete();
  }
}
