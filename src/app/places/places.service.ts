import { Injectable } from '@angular/core';
import { Place } from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel tower',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004__340.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageUrl: 'https://cdn.pixabay.com/photo/2013/10/29/08/34/queen-of-liberty-202218__340.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: '3',
      title: 'Arch of Triumph',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/03/15/10/32/paris-4056742_960_720.jpg',
      comments: []
    }
  ]

  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlaces(title: string, imageUrl: string) {
    this.places.push({
      title,
      imageUrl,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }

}
