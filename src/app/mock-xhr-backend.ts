
import { Request, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

export class MockXHRBackend {
    _cardItems = [
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
    constructor() {
  }

  createConnection(request: Request) {
    var response = new Observable((responseObserver: Observer<Response>) => {
      var responseData;
      var responseOptions;
      switch (request.method) {
        case RequestMethod.Get:
          if (request.url.indexOf('carditems?medium=') >= 0 || request.url === 'carditems') {
            let medium;
            if (request.url.indexOf('?') >= 0) {
              medium = request.url.split('=')[1];
              if (medium === 'undefined') {
                medium = '';
              }
            }
            var cardItems;
            if (medium) {
              cardItems = this._cardItems.filter(cardItem => cardItem.medium === medium);
            } else {
              cardItems = this._cardItems;
            }
            responseOptions = new ResponseOptions({
              body: { cardItems: JSON.parse(JSON.stringify(cardItems)) },
              status: 200
            });
          } else {
            var id = parseInt(request.url.split('/')[1]);
            cardItems = this._cardItems.filter(cardItem => cardItem.id === id);
            responseOptions = new ResponseOptions({
              body: JSON.parse(JSON.stringify(cardItems[0])),
              status: 200
            });
          }
          break;
        case RequestMethod.Post:
          var cardItem = JSON.parse(request.text().toString());
          cardItem.id = this._getNewId();
          this._cardItems.push(cardItem);
          responseOptions = new ResponseOptions({ status: 201 });
          break;
        case RequestMethod.Delete:
          var id = parseInt(request.url.split('/')[1]);
          this._deletecardItem(id);
          responseOptions = new ResponseOptions({ status: 200 });
      }

      var responseObject = new Response(responseOptions);
      responseObserver.next(responseObject);
      responseObserver.complete();
      return () => { };
    });
    return { response };
  }

  _deletecardItem(id) {
    var cardItem = this._cardItems.find(cardItem => cardItem.id === id);
    var index = this._cardItems.indexOf(cardItem);
    if (index >= 0) {
      this._cardItems.splice(index, 1);
    }
  }

  _getNewId() {
    if (this._cardItems.length > 0) {
      return Math.max.apply(Math, this._cardItems.map(cardItem => cardItem.id)) + 1;
    }
  }

}