import { Component } from '@angular/core';
import { NavController, FabContainer } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

import { AddOrderPage } from './add-order/add-order';
import { OrderService } from '../../services/order.service';
import { ToastService } from '../../services/toast.service';

export interface Order {
  name: string;
  amount: number;
  done: boolean;
}

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
  providers: [ OrderService ]
})
export class OrdersPage {

  public orders: Array<Order>;
  public filter: string = '';

  constructor(public navCtrl: NavController, private toast: ToastService, private orderService: OrderService) {
    
  }

  ionViewWillEnter(){
    this.orders = this.getAll();
  }

  add(){
    this.navCtrl.push(AddOrderPage);
  }

  done(index: number, done: boolean){
    this.orders[index].done = done;
    this.orderService.update(index, this.orders[index]); 
    this.orders = this.getAll();
  }

  delete(index: number) {
    this.orderService.delete(index);
  }

  getAll() : any[] {
    var orders = [];
    this.orderService.getAll().subscribe(
      data => {
        orders = data;
      },
      err => {
        if(err.status === 0) this.toast.error('Error al comunicarse con el server.');
        else this.toast.error(err.json().message);
      },
      () => console.log('OrdersPage => done() finished.')
    );
    return orders;  
  }

  shareVia(appName: string, fab : FabContainer){
    fab.close();
    SocialSharing.shareVia(appName, this.orders.toString(), null, null, null)
      .then(() => this.toast.success("Success"))
      .catch(() => this.toast.error("Error"));
  }

}
