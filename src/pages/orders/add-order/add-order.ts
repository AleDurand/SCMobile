import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { OrderService } from '../../../services/order.service';

export class Order {
  name: string;
  amount: number;
  done: boolean;
}

@Component({
  selector: 'page-add-order',
  templateUrl: 'add-order.html',
  providers: [OrderService]
})
export class AddOrderPage {

  public orderForm;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private orderService: OrderService) {
    this.orderForm = formBuilder.group({  
      'name': ['', Validators.compose([Validators.required])],
      'amount': ['', Validators.compose([Validators.required])]
    });
  }

  save(order : Order) {
    if(this.orderForm.valid) {
      order.done = false;
      this.orderService.add(order);
      this.navCtrl.pop();
    }
  }
 
}

