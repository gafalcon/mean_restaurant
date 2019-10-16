import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { exampleJson } from './example';
// import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

    API_KEY = 'AIzaSyDVeOWDBwAvMepBsbf0H57aRBrfcooBBUQ';
    API_URL = 'http://localhost:3000/api';

    PHOTO_URL = 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDVeOWDBwAvMepBsbf0H57aRBrfcooBBUQ&maxwidth=400&photoreference=';
    constructor(private http: HttpClient) { }

    getRestaurants(query: string) {
        return this.http.get(`${this.API_URL}/restaurant/search?query=` + query);
        // console.log(query);
        // return of(exampleJson);
    }

    getPhotoURL(photoReference: string) {
        return this.PHOTO_URL + photoReference;
    }
}
