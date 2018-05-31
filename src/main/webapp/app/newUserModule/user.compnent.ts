import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {User} from './user.model'
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  public users: User[]=[] ; 

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
  };

  addUser(user: User): void {
    this.userService.createUser(user)
      .subscribe( data => {
        //this.users = this.users.filter(u => u !== user);
      })
  };

  /*updateUser(user: User): void {
    this.userService.updateUser(user)
      .subscribe( data => {
        //this.users = this.users.filter(u => u !== user);
      })
  };*/

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        //this.users = this.users.filter(u => u !== user);
      })
  };

}