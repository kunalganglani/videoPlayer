import { CardDetailsComponent } from './card-details.component';
import {RouterModule} from '@angular/router';
const routes = [
    {path: '', component: CardDetailsComponent}
];

export default RouterModule.forChild(routes);
