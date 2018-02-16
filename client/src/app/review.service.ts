import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Review } from './review';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReviewService {


  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }


// get reviews from the server
  getReviews(apartmentId: number): Observable<Review[]> {
    let url = `api/apartments/${apartmentId}/reviews`;
    return this.http.get<Review[]>(url)
      .pipe(
        tap(reviews => this.log(`fetched reviews`)),
        catchError(this.handleError('getReviews', []))
      );
  }

// add review to the server
  addReview(review: Review): Observable<Review> {
    let url = `api/apartments/${review.apartment}/reviews`;
    return this.http.post<Review>(url, review, httpOptions).pipe(
      tap((review: Review) => this.log(`added review w/ id=${review.id}`)),
      catchError(this.handleError<Review>('addReview'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string): void {
    this.messageService.add('ReviewService: ' + message);
  }

}
