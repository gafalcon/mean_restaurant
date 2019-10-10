import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { exampleJson } from './example';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

    API_KEY = 'AIzaSyDVeOWDBwAvMepBsbf0H57aRBrfcooBBUQ';
    API_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyDVeOWDBwAvMepBsbf0H57aRBrfcooBBUQ&location=42.652580,-73.756233&radius=5500&type=restaurant&keyword=';

    PHOTO_URL = 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDVeOWDBwAvMepBsbf0H57aRBrfcooBBUQ&maxwidth=400&photoreference=';
    constructor(private http: HttpClient) { }

    getRestaurants(query: string) {
        // return this.http.get(this.API_URL + query);
        console.log(query);
        return of(exampleJson);
    }

    getPhotoURL(photoReference: string) {
        return this.PHOTO_URL + photoReference;
    }
}
