import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ApartmentService }  from '../apartment.service';

import { Apartment } from '../apartment';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {
  @Input()
  apartment: Apartment;

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService,
    private location: Location
  ) { }



  ngOnInit(): void {
    this.getApartment();
  }


  getApartment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apartmentService.getApartment(id).subscribe(apartment => this.apartment = apartment);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.apartmentService.updateApartment(this.apartment)
    .subscribe(() => this.goBack());
  }





}
