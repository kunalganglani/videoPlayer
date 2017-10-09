import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
// url search for adding url param to make query api
import 'rxjs/add/operator/map';

 interface CardInfoType {
  id: number;
  cardTitle: string;
  cardDescription: string;
  cardRating: number;
  cardImage: string;
  medium: string;
}

@Injectable()

export class CardItemService {
  cardItems: CardInfoType[] = [
    {
      id: 1,
      cardTitle: 'Firebug',
      cardDescription: 'Series',
      cardRating: 2,
      cardImage: '',
      medium: 'Series'
    },
    {
      id: 2,
      cardTitle: 'Firebug',
      cardDescription: 'Movies',
      cardRating: 2,
      cardImage: '',
      medium: 'Movies'
    },
    {
      id: 3,
      cardTitle: 'Firebug',
      cardDescription: 'Series',
      cardRating: 2,
      cardImage: '',
      medium: 'Series'
    },
    {
      id: 4,
      cardTitle: 'Firebug',
      cardDescription: 'Movies',
      cardRating: 2,
      cardImage: '',
      medium: 'Movies'
    },
    {
      id: 5,
      cardTitle: 'Firebug',
      cardDescription: 'Movies',
      cardRating: 2,
      cardImage: '',
      medium: 'Movies'
    }
  ];
  constructor(private http: Http) { }
  get() {
    return this.cardItems;
  }
  add(cardItem) {
    this.cardItems.push(cardItem);
  }
  delete(cardItem) {
    const index = this.cardItems.indexOf(cardItem);
    if (index >= 0) {
      this.cardItems.splice(index, 1);
    }
  }
}
