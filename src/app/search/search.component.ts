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
            this.restaurants = res.results;
        });
    }

}
