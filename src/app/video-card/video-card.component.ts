import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface CardInfoType {
  id: number;
  cardTitle: string;
  cardDescription: string;
  cardRating: number;
  cardImage: string;
}

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})

export class VideoCardComponent implements OnInit {
  // @Input() cardItem;
  // @Output() openVideo = new EventEmitter();

  ratingClicked: number;
  itemIdRatingClicked: number;
  defaultCard = {
    cardTitle : 'Default Card Title',
    cardDescription: 'Default Card Description',
    cardRating: 3,
    cardImage : ''
  };
  cardItem: CardInfoType = {
    id: 0,
    cardTitle : 'Default Card Title',
    cardDescription: 'Default Card Description',
    cardRating: 3,
    cardImage : ''
  };
  items: any[] = [
      {
        id: 0,
        cardTitle : 'Default Card Title',
        cardDescription: 'Default Card Description',
        cardRating: 3,
        cardImage : ''
      },
      {
        id: 1,
        cardTitle : 'Default Card Title',
        cardDescription: 'Default Card Description',
        cardRating: 3,
        cardImage : ''
      },
      {
        id: 2,
        cardTitle : 'Default Card Title',
        cardDescription: 'Default Card Description',
        cardRating: 3,
        cardImage : ''
      },
      {
        id: 3,
        cardTitle : 'Default Card Title',
        cardDescription: 'Default Card Description',
        cardRating: 3,
        cardImage : ''
      },
      {
        id: 4,
        cardTitle : 'Default Card Title',
        cardDescription: 'Default Card Description',
        cardRating: 3,
        cardImage : ''
      }
  ];
  ratingComponetClick(clickObj: any): void {
    const item = this.items.filter((Item: any) => Item.id === clickObj.itemId);
    if (!!item && item.length === 1){
      item[0].rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = clickObj.itemId;
    }
  }

 onOpenVideo(item) {
   console.log('video open attempt made for ' + item);
 }
  constructor() { }

  ngOnInit() {
  }

}
