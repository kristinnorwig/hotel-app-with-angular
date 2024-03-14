import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // damit direktiven funktionieren
import { RouterModule } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css',
})
export class BookingsComponent {
  constructor(private bookingService: BookingService) {} //Service dependency injection

  bookings: Booking[] = [];

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((result) => {
      // subscribe = warten auf das Ergebnis des Observables
      this.bookings = result;
    });
  }

  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking).subscribe();
    this.bookings = this.bookings.filter((b) => b !== booking);
  }
}
