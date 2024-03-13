import { Component } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css',
})
export class CreateBookingComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  booking: Booking = {
    id: 100,
    name: 'Name',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      let currentId = Bookings.find((booking) => booking.id == id)!; // ! da davon ausgegangen wird ein Booking zu finden
      this.booking = currentId;
    }
  }

  saveBooking(): void {
    let currentId = Bookings.find((booking) => booking.id == this.booking.id);

    if (currentId === null || currentId === undefined) {
      Bookings.push(this.booking);
      this.router.navigate(['bookings']);
    } else {
      currentId = this.booking;
    }

    this.router.navigate(['bookings']);
  }

  dateChange(event: Event, isStart: boolean) {
    let value = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(value);
    } else {
      this.booking.endDate = new Date(value);
    }
  }
}
