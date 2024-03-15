import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EventSignupComponent } from './event-sign-up/event-sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [AppComponent, CreateBookingComponent, EventSignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookingsComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
