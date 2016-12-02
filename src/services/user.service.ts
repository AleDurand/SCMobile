import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Configuration } from '../app/app.constants';
import { SafeHttp } from './safe-http.service';


@Injectable()
export class UserService {

  private actionUrl: string;
  
  constructor(private http: SafeHttp, private configuration: Configuration, public events: Events, public storage : Storage) {
    this.actionUrl = configuration.ServerWithApiUrl + '/users/';
  }

  isLoggedIn() {
    return this.storage.get('logged_in').then((value) => {
      return value === true;
    });
  }

  login(username: string) {
    this.storage.set('logged_in', true);
    this.storage.set('username', username);
    this.events.publish('user:login');
  }

  logout() {
    this.storage.remove('logged_in');
    this.storage.remove('username');
    this.events.publish('user:logout');
  }

}