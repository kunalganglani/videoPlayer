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
  @Input() cardItem;
  @Output() openVideo = new EventEmitter();

  ratingClicked: number;
  itemIdRatingClicked: number;
  defaultCard = {
    cardTitle: 'Default Card Title',
    cardDescription: 'Default Card Description',
    cardRating: 3,
    cardImage: ''
  };
/* 
  cardItems: any[] = [
    {
      'id': 1, 'cardTitle': 'Better Living Through Chemistry',
      'cardDescription': 'Comedy|Drama', 'cardRating': 4,
      'cardImage': 'http://dummyimage.com/100x100.png/5fa2dd/ffffff' },
    {
      'id': 2, 'cardTitle': 'Adventures of Arsène Lupin, The (Aventures d\'Arsène Lupin, Les)',
      'cardDescription': 'Crime|Mystery', 'cardRating': 3,
      'cardImage': 'http://dummyimage.com/100x100.jpg/dddddd/000000' },
    {
      'id': 3, 'cardTitle': 'Autumn Tale, An (Conte d\'automne)',
      'cardDescription': 'Romance', 'cardRating': 2,
      'cardImage': 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff' },
    {
      'id': 4, 'cardTitle': 'Salt',
      'cardDescription': 'Action|Thriller', 'cardRating': 1,
      'cardImage': 'http://dummyimage.com/100x100.bmp/ff4444/ffffff' },
    {
      'id': 5, 'cardTitle': 'Fugly!',
      'cardDescription': 'Comedy', 'cardRating': 2,
      'cardImage': 'http://dummyimage.com/100x100.png/dddddd/000000' },
    {
      'id': 6, 'cardTitle': 'Weather Man, The',
      'cardDescription': 'Comedy|Drama', 'cardRating': 3,
      'cardImage': 'http://dummyimage.com/100x100.jpg/ff4444/ffffff' },
    {
      'id': 7, 'cardTitle': 'Four Eyed Monsters',
      'cardDescription': 'Comedy|Drama|Fantasy|Romance', 'cardRating': 3,
      'cardImage': 'http://dummyimage.com/100x100.bmp/5fa2dd/ffffff' },
    {
      'id': 8, 'cardTitle': 'Stevie Nicks: Live at Red Rocks',
      'cardDescription': 'Documentary|Musical', 'cardRating': 4,
      'cardImage': 'http://dummyimage.com/100x100.jpg/dddddd/000000' },
    {
      'id': 9, 'cardTitle': 'Jim Jefferies: Fully Functional (EPIX)',
      'cardDescription': 'Comedy', 'cardRating': 4,
      'cardImage': 'http://dummyimage.com/100x100.jpg/ff4444/ffffff' },
    {
      'id': 10, 'cardTitle': 'Infidel, The',
      'cardDescription': 'Comedy', 'cardRating': 4,
      'cardImage': 'http://dummyimage.com/100x100.bmp/cc0000/ffffff'
    }
  ];
  ratingComponetClick(clickObj: any): void {
    const item = this.cardItems.filter((Item: any) => Item.id === clickObj.itemId);
    if (!!item && item.length === 1) {
      item[0].rating = clickObj.rating;
      this.ratingClicked = clickObj.rating;
      this.itemIdRatingClicked = clickObj.itemId;
    }
  }
 */
  onOpenVideo(item) {
    console.log('video open attempt made for ' + item);
  }
  constructor() { }

  ngOnInit() {
  }

}
