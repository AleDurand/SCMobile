import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

export class Product {
  name: string;
  amount: number;
  done: boolean;
}

@Component({
  selector: 'page-add-order',
  templateUrl: 'add-order.html'
})
export class AddOrderPage {

  public products: Array<Product>;
  public productForm;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
    this.products = JSON.parse(localStorage.getItem("products"));
    if(!this.products) {
      this.products = [];
    }
    this.productForm = formBuilder.group({  
      'name': ['', Validators.compose([Validators.required])],
      'amount': ['', Validators.compose([Validators.required])]
    });
  }

  save(product : Product) {
    if(this.productForm.valid) {
      product.done = false;
      this.products.push(product);
      localStorage.setItem("products", JSON.stringify(this.products));
      this.navCtrl.pop();
    }
  }
 
}

