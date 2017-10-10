import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import { VideoCardListComponent } from '../video-card-list/video-card-list.component';
import { VideoCardComponent } from '../video-card/video-card.component';
import { RatingComponent } from '../rating/rating.component';

import homeRoutes from './home.routes';

@NgModule({
    imports:[CommonModule, homeRoutes],
    declarations: [HomeComponent, VideoCardListComponent, VideoCardComponent, RatingComponent]
})
export default class HomeModule{}