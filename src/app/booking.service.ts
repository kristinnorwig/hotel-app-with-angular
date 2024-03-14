import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root', // ein Service der in ganzer Anwendung benutzt wird = root
})
export class BookingService {
  constructor() {}

  getBookings(): Booking[] {
    return Bookings;
  }

  deleteBooking(booking: Booking): void {
    // void = soll einfach nur ausgeführt werden
    const index = Bookings.indexOf(booking);
    Bookings.splice(index, 1);
  }

  getBookingById(id: number): Booking {
    const bookingById = Bookings.find((booking) => booking.id == id)!; // ! da davon ausgegangen wird ein Booking zu finden
    return bookingById;
  }

  addBooking(booking: Booking): void {
    Bookings.push(booking);
  }

  updateBooking(booking: Booking): void {
    let currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }
}
