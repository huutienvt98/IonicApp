import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBooking: Booking[];
  constructor(
    private bookingService: BookingsService
  ) { }

  ngOnInit() {
    this.loadedBooking = this.bookingService.bookings;
  }
  
  onCancelBooking(offerId: string, slidingEL: IonItemSliding) {
    slidingEL.close();
    // cancel booking with ID offer
  }
}
