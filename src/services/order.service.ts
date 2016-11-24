import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Configuration } from '../app/app.constants';

@Injectable()
export class OrderService {

    private actionUrl: string;
    private orders;

    constructor(private http: Http, private configuration: Configuration) {
         this.actionUrl = configuration.ServerWithApiUrl + '/orders/';
         this.orders = JSON.parse(localStorage.getItem("orders"));
         if(this.orders === null){
             this.orders = [];
         }
    }

    add(order) {
        this.orders.push(order);
        localStorage.setItem("orders", JSON.stringify(this.orders));
    }

    update(id, order) {
        this.orders[id] = order;
        localStorage.setItem("orders", JSON.stringify(this.orders));
    }

    delete(id) {
        this.orders.splice(id, 1);
        localStorage.setItem("orders", JSON.stringify(this.orders));
    }

    getAll() {
        return Observable.create(observer => {
            this.orders = JSON.parse(localStorage.getItem("orders"));
            observer.next(this.orders);
            observer.complete();
        });
    }
}
