import { Route } from '@angular/router';

import { HomeComponent } from './';

import { UserComponent } from '../newUserModule/user.compnent';
import { AddUserComponent } from '../newUserModule/add-user.component';



export const HOME_ROUTE: Route = 
{path: '',component: HomeComponent,data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};
