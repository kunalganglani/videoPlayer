import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
// url search for adding url param to make query api
import 'rxjs/add/operator/map';
import { CardInfoType } from './card';
import { cardItems } from './mock-cards';

@Injectable()
export class CardItemService {
  getCards(): Promise<CardInfoType[]> {
    return Promise.resolve(cardItems);
  }
}

