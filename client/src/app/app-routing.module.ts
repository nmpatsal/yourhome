import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApartmentsComponent } from './apartments/apartments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApartmentDetailComponent } from './apartment-detail/apartment-detail.component';
import { UploadApartmentComponent } from './upload-apartment/upload-apartment.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'upload_apartment', component: UploadApartmentComponent },
  { path: 'detail/:id', component: ApartmentDetailComponent },
  { path: 'apartments/:id/reviews', component: ReviewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
