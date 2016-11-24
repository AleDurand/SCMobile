import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

//import { Slides } from 'ionic-angular';

import { OffersPage } from '../offers/offers';
import { MagazinesPage } from '../magazines/magazines';
import { OrdersPage } from '../orders/orders';
import { StoresPage } from '../stores/stores';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openOffers(){
    this.navCtrl.push(OffersPage);
  }

  openMagazines(){
    this.navCtrl.push(MagazinesPage); 
  }

  openOrders(){
    this.navCtrl.push(OrdersPage);
  }

  openStore(){
    this.navCtrl.push(StoresPage);
  }

}
