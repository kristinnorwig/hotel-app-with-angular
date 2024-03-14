import { Injectable } from '@angular/core';

import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // ein Service der in ganzer Anwendung benutzt wird = root
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  bookingsUrl: string = '/api/bookings';

  getBookings(): Observable<Booking[]> {
    let response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    return response;
  }

  deleteBooking(booking: Booking): Observable<Booking> {
    let response = this.httpClient.delete<Booking>(
      this.bookingsUrl + '/' + booking.id
    );
    return response;
  }

  getBookingById(id: number): Observable<Booking> {
    let response = this.httpClient.get<Booking>(this.bookingsUrl + '/' + id);
    return response;
  }

  addBooking(booking: Booking): Observable<Booking> {
    let response = this.httpClient.post<Booking>(this.bookingsUrl, booking);
    return response;
  }
}
