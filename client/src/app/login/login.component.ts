import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandlingService } from '../errorhandling.service';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../user';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  users : User[] = [];
  all_users : User[] = [];
  registerForm : FormGroup;
  status : boolean = false;
  messages: string[] = [];
  formError: number = 0;

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private eh: ErrorHandlingService,
    private router: Router,
    private fb: FormBuilder,
    private messageService : MessageService
  ) { }

  ngOnInit() {
    this.getUsers();

    this.registerForm = new FormGroup({
      registerUsername: new FormControl('', [Validators.required, Validators.minLength(4)]),
      registerPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
    });
  }
// Log in Methods
  login(username, password) {
    this.formError = 0;
    this.auth.login(username, password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/']);
          this.status = true;
        } else{
          this.status = false;
          this.addError("Please insert valid Credentials");
        }
    });
  }

  logout() {
    this.auth.logout();
  }

// Register Methods

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.all_users = users);
  }


  add(username: string, password: string): void {
    this.formError = 1;
    username = username.trim();

    if (!username || !password) {
      this.addError("Please complete all the required fields.")
      return ;
    }
    for (let user of this.all_users){
      if (user.username == username) {
        this.addError("This username already exists.")
        return ;
      }
    }


    this.userService.addUser({username , password} as User)
      .subscribe(user => {
        this.users.push(user);
    });

    setTimeout(() => {
      alert('You are successfully logged in!');
      this.login(username, password);
    }, 1000);
  }


  addError(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages.length = 0;
  }


}
