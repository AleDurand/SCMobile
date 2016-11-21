import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AddOrderPage } from './add-order/add-order';

export interface Product {
  name: string;
  amount: number;
  done: boolean;
}

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {

  public products: Array<Product>;

  constructor(public navCtrl: NavController) {
    this.products = JSON.parse(localStorage.getItem("products"));
    if(!this.products) {
      this.products = [];
    }
  }

  ionViewWillEnter(){
    this.products = JSON.parse(localStorage.getItem("products"));
  }

  add(){
    this.navCtrl.push(AddOrderPage);
  }

  done(index: number, done: boolean){
    this.products[index].done = done;
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  delete(index: number) {
    this.products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  filter(event: any) {
    // Reset items back to all of the items
    this.products = JSON.parse(localStorage.getItem("products"));

    // set val to the value of the searchbar
    let val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.products = this.products.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }



}
