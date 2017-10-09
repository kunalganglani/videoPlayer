import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { RatingComponent } from './rating/rating.component';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { VideoCardListComponent } from './video-card-list/video-card-list.component';

const lookupLists = {
  mediums: ['Movies', 'Series']
};

@NgModule({
  declarations: [
    AppComponent,
    VideoCardComponent,
    RatingComponent,
    HeaderCompComponent,
    VideoCardListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
