import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService,
    private formbuilder: FormBuilder
  ) {}

  booking: Booking = {
    id: 100,
    name: '',
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date(),
  };

  // reactive validation
  bookingForm = this.formbuilder.group({
    id: [0, Validators.required],
    name: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
    roomNumber: [0, Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
  });

  ngOnInit(): void {
    if (this.router.url != '/create') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

      this.bookingService.getBookingById(id).subscribe((result) => {
        this.booking = result;

        this.bookingForm.setValue({
          id: this.booking.id,
          roomNumber: this.booking.roomNumber,
          name: this.booking.name,
          startDate: this.booking.startDate,
          endDate: this.booking.endDate,
        });
      });
    }
  }

  saveBooking(): void {
    this.booking.id = this.bookingForm.get('id')?.value!;
    this.booking.name = this.bookingForm.get('name')?.value!;
    this.booking.name = this.bookingForm.get('name')?.value!;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value!;
    this.booking.startDate = this.bookingForm.get('startDate')?.value!;
    this.booking.endDate = this.bookingForm.get('endDate')?.value!;

    this.bookingService.addBooking(this.booking).subscribe();
    this.router.navigate(['bookings']);
  }

  dateChange(event: Event, isStart: boolean) {
    var val = (event.target as HTMLInputElement).value;

    if (isStart) {
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}
