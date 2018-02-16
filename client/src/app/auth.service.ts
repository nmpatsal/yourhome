import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import { ErrorHandlingService } from './errorhandling.service';
import { MessageService } from './message.service';
import { User } from './user';

class Credentials {
  constructor(public username: string, public password: string) {

  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  user: User;

  constructor(
    private http: HttpClient,
    private eh: ErrorHandlingService,
    private messageService: MessageService
  ) { }

  login(username, password) : Observable<boolean> {
    const authUrl = `api-token-auth/`;
    var credentials = new Credentials(username, password);
    return this.http
      .post(authUrl, credentials, httpOptions).pipe(
        map(results => {
          if (results['token']) {
            localStorage.setItem('yourhomefront-jwt-token', results['token']);
            this.user = results['user']
            this.isLoggedIn = true;
            return true;
          } else {
            return false;
          }
        }),
        catchError(this.eh.handleError<boolean>(`login username=${username}`,
          false))
      );
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('yourhomefront-jwt-token');
  }

  // private log(message: string): void {
  //   this.messageService.add('AuthService: ' + message);
  // }

}
