import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CardDetailsComponent } from './card-details.component';
import cardDetailsRoutes from './card-details.routes';
@NgModule({
    imports:[CommonModule, cardDetailsRoutes],
    declarations: [CardDetailsComponent]
})
export default class ContactsModule {}
