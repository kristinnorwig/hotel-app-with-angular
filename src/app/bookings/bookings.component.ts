import { Component } from '@angular/core';
import { Bookings } from '../mock-bookings';
import { CommonModule } from '@angular/common'; // damit direktiven funktionieren
import { RouterModule } from '@angular/router';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingsComponent {
  bookings = Bookings;

  deleteBooking(booking: Booking): void {
    let index = Bookings.indexOf(booking);
    Bookings.splice(index, 1);
  }
}
