import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders ,HttpResponse } from '@angular/common/http';

import {User} from './user.model'
 
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http:HttpClient) {}

  //private userUrl = 'http://localhost:8080/user-portal/api';

  public getUsers() :Observable<any> {
    return this.http.get(SERVER_API_URL + 'api/user-demo/userDetails')
    .map((res: Response) => {
      return res;
  });
  }

  public deleteUser(user) {
    return this.http.delete(SERVER_API_URL + "api/user-demo/delete/"+ user.id);
  }

  public createUser(user) {
    return this.http.post(SERVER_API_URL + "api/user-demo/add/",user);
  }

  /*public updateUser(user) {
    return this.http.post(SERVER_API_URL + "api/user-demo/delete/"+ user.id);
  }*/
}