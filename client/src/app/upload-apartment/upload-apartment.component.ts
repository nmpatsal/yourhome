import { Component, OnInit} from '@angular/core';

import { Apartment } from '../apartment'
import { ApartmentService } from '../apartment.service';
import { Router } from '@angular/router';
import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-upload-apartment',
  templateUrl: './upload-apartment.component.html',
  styleUrls: ['./upload-apartment.component.css']
})
export class UploadApartmentComponent implements OnInit {
  apartments: Apartment[] = [];
  all_apartments: Apartment[] = [];
  form: FormGroup;
  loading: boolean = false;
  messages: string[] = [];
  userId: string;
@ViewChild('apartmentPhotos') apartmentPhotos: ElementRef;

  constructor(private apartmentService: ApartmentService,
              private router: Router,
              private fb: FormBuilder,
              private auth: AuthService) {
                this.createForm();
  }


  ngOnInit() {
    this.getApartments();

  }

  getApartments(): void {
    this.apartmentService.getApartments()
      .subscribe(apartments => this.all_apartments = apartments);
  }

  add(title: string, description: string, city: string, prices: string, photos: string|any): void {


    const formModel = this.prepareSave();

    title = title.trim()

    description = description.trim();

    city = city.trim();
    if (!title|| !description || !city || !prices) {
      this.addError("Please complete all the required fields.")
      return ;
    }
    for (let apartment of this.all_apartments){
      if (apartment.title == title) {
        this.addError("This title name of apartment already exists. Please choose a different one!")
        return ;
      }
    }

    this.loading = true;

    var xhr = new XMLHttpRequest();
    xhr.open("post", "api/apartments", true);
    xhr.send(formModel);


    setTimeout(() => {
      // FormData cannot be inspected (see "Key difference"), hence no need to log it here
      alert('done!');
      this.router.navigate(['/apartments']);
      this.loading = false;
    }, 1000);



  }
// ,  Validators.minLength(5)
  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],
      price: ['', Validators.required],
      // user: null,
      // name: ['', Validators.required],
      photos: null
    });
  }


  onFileChange(event) {
    if(event.target.files.length > 0) {
      // let file = event.target.files[0];
      let file = event.target.files[0];
      this.form.get('photos').setValue(file);
    }
  }

  private prepareSave(): any {
    this.userId = String(this.auth.user.id);
    let input = new FormData();
    // This can be done a lot prettier; for example automatically assigning values by looping through `this.form.controls`, but we'll keep it as simple as possible here
    input.append('title', this.form.get('title').value);
    input.append('description', this.form.get('description').value);
    input.append('city', this.form.get('city').value);
    input.append('price', this.form.get('price').value);
    input.append('user', this.userId);
    //
    // // input.append('name', this.form.get('name').value);
    input.append('photos', this.form.get('photos').value);

    // we can do the above as the below with less code but we need userId
    // Object.entries(this.form).forEach(([key, value]) => {
    //   if (key === 'apartmentPhotos') {
    //     input.append('apartmentPhotos', value);
    //     console.log(this.form.get(key). value.name);
    //     console.log(this.form.get(key).value.img)
    //   } else {
    //     input.append(key, value);
    //   }
    // });


    // console.log(this.form.get('apartmentPhotos').value);

    console.log("edw to input eimai egw");
    return input;
  }

  clearFile() {
    this.form.get('photos').setValue(null);
    this.apartmentPhotos.nativeElement.value = '';
  }

  addError(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages.length = 0;
  }

}
