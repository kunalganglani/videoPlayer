import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';
import { CardDetailsComponent } from 'app/card-details/card-details.component';
const routes = [
    {path: '', component: HomeComponent},
    {path: 'cardDetails', component: CardDetailsComponent}
];


export default RouterModule.forRoot(routes);
