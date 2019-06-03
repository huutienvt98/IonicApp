import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  private _bookings: Booking[] = [
    new Booking('xyz', 'p1', 'huutienvt98', 'Venice', 2)
  ];
  constructor() { }

  get bookings() {
    return [...this._bookings];
  }
}
