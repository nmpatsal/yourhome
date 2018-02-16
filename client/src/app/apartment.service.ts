import { Injectable } from '@angular/core';

import { MessageService } from './message.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Apartment } from './apartment';


import { HttpClient, HttpHeaders } from '@angular/common/http';


import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable()
export class ApartmentService {

  private apartmentsUrl = 'api/apartments';


  constructor(private http: HttpClient,
              private messageService: MessageService) { }


  getApartments(): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(this.apartmentsUrl).pipe(
      tap(apartments => this.log(`fetched apartments`)),
      catchError(this.handleError('getApartments', []))
    );
  }

  getApartment(id: number): Observable<Apartment> {
    const url = `${this.apartmentsUrl}/${id}`;
    return this.http.get<Apartment>(url).pipe(
      tap(_ => this.log(`fetched Apartment id=${id}`)),
      catchError(this.handleError<Apartment>(`getApartment id=${id}`))
    );
  }



  updateApartment (apartment: Apartment): Observable<any> {
    return this.http.put(this.apartmentsUrl, apartment, httpOptions).pipe(
      tap(_ => this.log(`updated apartment id=${apartment.id}`)),
      catchError(this.handleError<any>('updateApartment'))
    );
  }

  addApartment (apartment: Apartment): Observable<Apartment> {
    return this.http.post<Apartment>(this.apartmentsUrl, apartment, httpOptions).pipe(
      tap((apartment: Apartment) => this.log(`added apartment w/ id=${apartment.id}`)),
      catchError(this.handleError<Apartment>('addApartment'))
    );
  }

  /** DELETE: delete the apartment from the server */
  deleteApartment(apartment: Apartment | number): Observable<Apartment> {
    const id = typeof apartment === 'number' ? apartment : apartment.id;
    const url = `${this.apartmentsUrl}/${id}`;

    return this.http.delete<Apartment>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted apartment id=${id}`)),
      catchError(this.handleError<Apartment>('deleteApartment'))
    );
  }

  /* GET apartments whose title contains search term */
  searchApartments(term: string): Observable<Apartment[]> {
    if (!term.trim()) {
      // if not search term, return empty apartment array.
      return of([]);
    }
    return this.http.get<Apartment[]>(`api/apartments/?title=${term}`).pipe(
      tap(_ => this.log(`found apartments matching "${term}"`)),
      catchError(this.handleError<Apartment[]>('searchApartments', []))
    );
  }

  private log(message: string): void {
    this.messageService.add('ApartmentService:  ' + message);
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
