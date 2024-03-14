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
    this.bookings = this.bookingService.getBookings();
  }

  deleteBooking(booking: Booking): void {
    this.bookingService.deleteBooking(booking);
  }
}
