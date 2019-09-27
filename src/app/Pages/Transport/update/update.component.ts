import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

declare const validate:any;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http: HttpClient){}

  model3 = {
    id: '',
    vehicle: '',
    model: '',
    license: '',
    passengers: '',
    year: '',
    colour: '',

  };

  ngOnInit() {
  }

  
  submitted = false;
  
  onSubmit() {this.submitted = true;}

method3(){
  console.log(this.model3);
  this.http.get('http://127.0.0.1:3000/update',{
    params: {VehicleID:this.model3.id,Vehicle:this.model3.vehicle,VehicleModel:this.model3.model,Licence:this.model3.license,Max:this.model3.passengers,
      Year:this.model3.year,Colour:this.model3.colour}
  }).subscribe((response)=>{
    console.log('response',response[0].update);
  });
}
  
onclick(){
  validate();
  }


}
