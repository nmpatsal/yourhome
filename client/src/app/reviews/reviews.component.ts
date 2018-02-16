import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { Review } from '../review';
import { User } from '../user';
import { ReviewService } from '../review.service';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[];

  review: Review;

  messages: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        let apartmentId = +params.get('id');
        this.review = this.newReview(apartmentId);
        return this.reviewService.getReviews(+params.get('id'))
      }).subscribe(reviews => this.reviews = reviews);
  }

  newReview(apartmentId: number) : Review {
    var review = new Review();
    review.apartment = apartmentId;
    review.user = null;
    review.title = '';
    review.text = '';
    return review;
  }

  onSubmit() : void {

    if (!this.review.title || !this.review.text ) {
      this.addError("Please complete all the required fields.")
      return ;
    }

    this.review.user = this.auth.user.id;
    this.reviewService.addReview(this.review)
      .subscribe(review => {
        this.reviews.unshift(review);
        this.review = this.newReview(review.apartment);
      });
  }


  addError(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages.length = 0;
  }

}
