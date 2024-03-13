import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CreateBookingComponent],
  imports: [BrowserModule, AppRoutingModule, BookingsComponent, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
