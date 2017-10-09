import { Component, OnInit } from '@angular/core';
import { CardItemService } from '../card-item.service';
@Component({
  selector: 'app-video-card-list',
  templateUrl: './video-card-list.component.html',
  styleUrls: ['./video-card-list.component.css']
})
export class VideoCardListComponent implements OnInit {
  cardItems=  [];
  constructor(private cardItemService: CardItemService) { }

  getCards(): void {
    this.cardItemService.getCards().then(cards => this.cardItems = cards);
  }

  ngOnInit() {
    this.getCards();
  }

}
