import { Route } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './layouts';
import { UserComponent } from './newUserModule/user.compnent';
import { AddUserComponent } from './newUserModule/add-user.component';


export const navbarRoute: Route = {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar'
};

const routes: Routes = [
    { path: 'users', component: UserComponent },
    { path: 'add', component: AddUserComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class AppRoutingModule { }