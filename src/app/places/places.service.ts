import { Injectable } from '@angular/core';
import { Place } from './places.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1', 
      'Venice', 
      'Very beautiful place!', 
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/11/27/09/istock-627304216.jpg',
      5000),

    new Place(
      'p2',
      'Paris',
      'City of Fashion and City of Light',
      'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg',
      7000
    ),
    new Place(
      'p3',
      'London',
      'The city of class and entertainment',
      'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',
      6000
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string) {
    return {...this._places.find(
      p => p.id === id)};    
  }
  constructor() { }
}
