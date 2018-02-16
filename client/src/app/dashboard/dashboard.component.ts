import { Component, OnInit } from '@angular/core';

import { Apartment } from '../apartment';
import { ApartmentService } from '../apartment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apartments: Apartment[] = [];

  constructor(private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.getApartments();
  }

  getApartments(): void {
    this.apartmentService.getApartments()
          .subscribe(apartments => this.apartments = apartments.slice(1, 5));
  }

}
