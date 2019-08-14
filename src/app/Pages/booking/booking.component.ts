import { Component, OnInit } from '@angular/core';
import { Booking } from '../../Models/booking';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
// model = new NewCustomer(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
model = new Booking(1, 'Viraj Rathnayake', 'Bandarawela', '972623954', '0572231355', 'rathnayaka.viraj@gmail.com' );
submitted = false;

onSubmit() { this.submitted = true; }

// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }
}
