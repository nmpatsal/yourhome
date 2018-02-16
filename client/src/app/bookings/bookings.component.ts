import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings: Booking[] = [];

  booking: Booking[] = [];

  messages: string[] = [];

  constructor(private auth: AuthService,
              private route: ActivatedRoute,
              private successRouter: Router,
              private location: Location,
              private bookingService: BookingService) { }

  ngOnInit() {

  }



  newBooking(name: string, contact_no: string, comment: string) : void {

    if (!name || !contact_no || !comment ) {
      this.addError("Please complete all the fields.")
      return ;
    }

    const user = this.auth.user.id;
    const apartment = +this.route.snapshot.paramMap.get('id');
    name = name.trim();
    contact_no = contact_no.trim();
    comment = comment.trim();

    this.bookingService.newBooking({ user, apartment, name, contact_no, comment } as Booking)
      .subscribe(booking => {
        this.bookings.push(booking);
        this.successRouter.navigate(['/']);
    });


  }

  addError(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages.length = 0;
  }

}
