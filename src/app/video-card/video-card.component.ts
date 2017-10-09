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

 onOpenVideo(item) {
   console.log('video open attempt made for ' + item);
 }
  constructor() { }

  ngOnInit() {
  }

}
