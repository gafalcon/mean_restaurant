import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../google.service';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    searchForm: FormControl;
    restaurants: Array<object>;

    constructor(
        private googleApi: GoogleService,
    ) {

        this.searchForm = new FormControl('');
    }


    ngOnInit() {
    }

    onSubmit() {
        this.googleApi.getRestaurants(this.searchForm.value).subscribe((res) => {
            console.log(res);
            this.restaurants = res.results.map((restaurant) => {
                return {
                    place_id: restaurant.place_id,
                    name: restaurant.name,
                    rating: restaurant.rating,
                    price_level: restaurant.price_level,
                    photo_url: this.googleApi.getPhotoURL(restaurant.photos[0].photo_reference),
                    types: restaurant.types,
                    num_ratings: restaurant.user_ratings_total
                    // vicinity is address?
                };
            });
            // this.restaurants = res.results;
        });
    }

}
