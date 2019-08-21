import { Component, OnInit } from '@angular/core';
import { NewCustomer } from '../../../Models/new-customer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{


// model = new NewCustomer(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
model = new NewCustomer(1, 'Viraj Rathnayake', 'Bandarawela', '972623954', '0572231355', 'rathnayaka.viraj@gmail.com' );
submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }
}



