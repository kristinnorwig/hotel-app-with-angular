import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  booking: Booking = {
    id: 0,
    name: '',
    roomNumber: 0,
    startDate: new Date(),
    endDate: new Date(),
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      const bookingId = Number(id);
      const bookingById = this.bookingService.getBookingById(bookingId);
      if (bookingById) {
        this.booking = bookingById;
      } else {
        console.error(`Booking with id ${bookingId} not found.`);
      }
    }
  }

  saveBooking(): void {
    if (this.booking.id === 0) {
      this.bookingService.addBooking(this.booking);
    } else {
      this.bookingService.updateBooking(this.booking);
    }
    this.router.navigate(['bookings']);
  }

  dateChange(event: Event, isStart: boolean): void {
    const value = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(value);
    } else {
      this.booking.endDate = new Date(value);
    }
  }
}
