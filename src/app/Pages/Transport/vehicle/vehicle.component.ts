import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
declare const validate:any;
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent{
    
   constructor(private http: HttpClient){}

  model = {
    id: '',
    model: '',
    license: '',
    passengers: '',
    year: '',
    colour: '',

  };

  
  submitted = false;
  
  onSubmit() {this.submitted = true;}

method1(){
  this.http.get('http://127.0.0.1:3000/AddVehicle',{
    params: {VehicleID:this.model.id,VehicleModel:this.model.model,Licence:this.model.license,Max:this.model.passengers,
      Year:this.model.year,Colour:this.model.colour}
  }).subscribe((response)=>{
    console.log('response',response[0].AddVehicle);
  });
}

onclick(){
  validate();
}
}
