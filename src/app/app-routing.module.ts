import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { EventSignupComponent } from './event-sign-up/event-sign-up.component';

const routes: Routes = [
  {
    path: 'bookings',
    component: BookingsComponent,
  },
  {
    path: '',
    redirectTo: 'bookings', //Startseite zu bookings umleiten
    pathMatch: 'full', // first match, d.h. url muss komplett übereinstimmen bei "full"
  },
  {
    path: 'newbooking',
    component: CreateBookingComponent,
  },
  {
    path: 'createbooking',
    component: CreateBookingComponent,
  },
  {
    path: 'events',
    component: EventSignupComponent,
  },
  {
    path: 'editbooking/:id',
    component: CreateBookingComponent, //gleiche Struktur wie create evtl umbenen zu create-edit
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
