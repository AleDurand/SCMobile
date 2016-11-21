import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Configuration } from '../app/app.constants';

@Injectable()
export class OfferService {

    private actionUrl: string;

    constructor(private http: Http, private configuration: Configuration) {
         this.actionUrl = configuration.ServerWithApiUrl + '/offers/';
    }

    getById(id) {
        return Observable.create(observer => {
            observer.next(offers[id - 1]);
            observer.complete();
        });
    }

    getAll() {
        return Observable.create(observer => {
            observer.next(offers);
            observer.complete();
        });
    }
}

export const offers = [
    { id: 1, description: "PAÑALES P/NIÑO PAMPERS SUPERSEC XGD 18uni", price: 75.00, image: "http://www.lacoopeencasa.coop/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/7/17383_3.jpg" },
    { id: 2, description: "JUGO LISTO CEPITA NARANJA 1lts", price: 17.49, image: "http://www.lacoopeencasa.coop/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/3/8/3802_377.jpg" },
    { id: 3, description: "ACONDICIONADOR SEDAL FUERZA ANTI-QUIEBRE 190cm3", price: 26.50, image: "http://www.lacoopeencasa.coop/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/9/19510_179.jpg" },
    { id: 4, description: "APERITIVO CAMPARI BITTER  750cm3", price: 145.00, image: "http://www.lacoopeencasa.coop/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/8/18075_6.jpg" },
    { id: 5, description: "AGUA SABORIZ  S/GAS LEVITE POMELO 2500cm3", price: 22.40, image: "http://www.lacoopeencasa.coop/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/0/10633_45.jpg" },
    { id: 6, description: "YERBA MATE LA TRANQUERA 1000grs", price: 37.90, image: "http://www.lacoopeencasa.coop/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/0/10542_0.jpg" },
    { id: 7, description: "DETERGENTE LIQUIDO ARIEL AGUA FRIA 3lts", price: 135.00, image: "http://www.lacoopeencasa.coop/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/7/17263_17.jpg" },
    { id: 8, description: "PASTA DENTAL COLGATE ULTRA WHITE 90grs", price: 24.90, image: "http://www.lacoopeencasa.coop/media/catalog/product/cache/1/small_image/210x/9df78eab33525d08d6e5fb8d27136e95/1/4/14019_197.jpg" }
];