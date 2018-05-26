import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from './app.constants';
import { UserComponent } from './newUserModule/user.compnent';
import { AddUserComponent } from './newUserModule/add-user.component';
import { spreadRoute } from './layouts/spreadjsTutorial/index';

const LAYOUT_ROUTES = [
    navbarRoute,
    { path: 'users1', component: UserComponent },
    { path: 'add', component: AddUserComponent },
    
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true , enableTracing: DEBUG_INFO_ENABLED })
    ],
    exports: [
        RouterModule
    ]
})
export class EcommerceAppRoutingModule {}
