import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import {HttpModule} from "@angular/http";
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

import { ReactiveFormsModule } from '@angular/forms';

import {VERSION} from '@angular/core'

import { AppComponent } from './app.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ItalicsDirective } from './italics.directive';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { ApartmentService } from './apartment.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApartmentSearchComponent } from './apartment-search/apartment-search.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { UploadApartmentComponent } from './upload-apartment/upload-apartment.component';
import { ErrorHandlingService } from './errorhandling.service';

import { FileUploadModule } from 'ng2-file-upload';
// import { ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewService } from './review.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AboutComponent } from './about/about.component';
import { BookingsComponent } from './bookings/bookings.component';
import { BookingService } from './booking.service';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    ItalicsDirective,
    ApartmentDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ApartmentSearchComponent,
    NavHeaderComponent,
    SiteFooterComponent,
    UploadApartmentComponent,
    ReviewsComponent,
    LoginComponent,
    AboutComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FileUploadModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    HttpModule,
    HttpClientModule,
  ],
  providers: [
    ApartmentService,
    MessageService,
    ReviewService,
    ErrorHandlingService,
    UserService,
    BookingService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
