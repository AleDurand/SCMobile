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
    this.navCtrl.setRoot(OffersPage, {}, { animate: true, direction: 'forward' });
  }

  openMagazines(){
    this.navCtrl.setRoot(MagazinesPage, {}, { animate: true, direction: 'forward' });
  }

  openOrders(){
    this.navCtrl.setRoot(OrdersPage, {}, { animate: true, direction: 'forward' });
  }

  openStore(){
    this.navCtrl.setRoot(StoresPage, {}, { animate: true, direction: 'forward' });
  }

}
