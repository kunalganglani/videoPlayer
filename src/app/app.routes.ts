import {RouterModule} from '@angular/router';
import { CardDetailsComponent } from 'app/card-details/card-details.component';
const routes = [
    {path: '', loadChildren: 'app/home/home.module'},
    {path: 'cardDetails', component: CardDetailsComponent}
];


export default RouterModule.forRoot(routes);
