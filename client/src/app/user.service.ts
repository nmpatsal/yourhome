import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorHandlingService } from './errorhandling.service';
import { MessageService } from './message.service';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

constructor(private http: HttpClient,
            private eh: ErrorHandlingService,
            private messageService: MessageService,
) { }
private usersUrl = 'api/users';

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.usersUrl)
    .pipe(
      tap(users => catchError(this.handleError('getUsers', []))),
      catchError(this.handleError('getUsers', []))
    );
 }

getUser(id: number): Observable<User> {
  const url = `${this.usersUrl}/${id}`;
  return this.http.get<User>(url).pipe(
    tap(_ => catchError(this.handleError<User>(`getUser id=${id}`))),
    catchError(this.handleError<User>(`getUser id=${id}`))
  );
}

addUser(user: User): Observable<User> {
  return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
    tap((user: User) => catchError(this.handleError<User>('addUser'))),
    catchError(this.handleError<User>('addUser'))
   );
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); // log to console instead
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private log(message: string): void {
  this.messageService.add('BookService: ' + message);
}

}
