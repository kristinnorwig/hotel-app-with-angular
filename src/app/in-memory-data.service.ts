import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings: Booking[] = [
      {
        id: 1,
        name: 'Max Mustermann',
        roomNumber: 100,
        startDate: new Date(),
        endDate: new Date('2021-07-21'),
      },
      {
        id: 2,
        name: 'John Doe',
        roomNumber: 100,
        startDate: new Date('2021-07-25'),
        endDate: new Date('2021-08-01'),
      },
      {
        id: 3,
        name: 'Eva Allen',
        roomNumber: 50,
        startDate: new Date('2021-09-05'),
        endDate: new Date('2021-09-19'),
      },
      {
        id: 4,
        name: 'Frankie Willis',
        roomNumber: 122,
        startDate: new Date('2021-08-04'),
        endDate: new Date('2021-08-11'),
      },
      {
        id: 5,
        name: 'April Baldwin',
        roomNumber: 178,
        startDate: new Date('2021-08-04'),
        endDate: new Date('2021-08-11'),
      },
      {
        id: 6,
        name: 'Rosemary Bond',
        roomNumber: 96,
        startDate: new Date('2021-08-04'),
        endDate: new Date('2021-08-11'),
      },
    ];

    return { bookings };
  }

  constructor() {}
}
