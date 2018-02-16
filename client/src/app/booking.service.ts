import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Booking } from './booking';
// import { ErrorHandlingService } from './errorhandling.service'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookingService {

  private bookingsUrl = 'api/bookings';

  constructor(private http: HttpClient) { }




  newBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingsUrl, booking, httpOptions).pipe(
      catchError(this.handleError<Booking>('newBooking'))
     );
  }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl)
      .pipe(
        catchError(this.handleError('getBookings', []))
      );
   }

   getBooking(id: number): Observable<Booking> {
     const url = `${this.bookingsUrl}/${id}`;
     return this.http.get<Booking>(url).pipe(
       catchError(this.handleError<Booking>(`getBooking id=${id}`))
     );
   }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // private log(message: string): void {
  //   this.messageService.add('BookService: ' + message);
  // }

}
