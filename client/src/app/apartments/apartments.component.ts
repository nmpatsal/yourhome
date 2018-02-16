import { Component, OnInit } from '@angular/core';

import { Apartment } from '../apartment';

import { ApartmentService } from '../apartment.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  //apartments = APARTMENTS;
  apartments: Apartment[];

  constructor(private apartmentService: ApartmentService,
              private auth: AuthService,) { }

  ngOnInit() {
    this.getApartments();
  }



  getApartments(): void {
    this.apartmentService.getApartments()
      .subscribe(apartments => this.apartments = apartments);
  }

  add(title: string, city: string, description: string, prices: string): void {
    title = title.trim();
    city = city.trim();
    let price = +prices;
    if (!title || !city || !description || !price) { return; }
    this.apartmentService.addApartment({ title, description, city, price } as Apartment)
      .subscribe(apartment => {
        this.apartments.push(apartment);
      });
  }

  delete(apartment: Apartment): void {
    this.apartments = this.apartments.filter(h => h !== apartment);
    this.apartmentService.deleteApartment(apartment).subscribe();
  }

}
