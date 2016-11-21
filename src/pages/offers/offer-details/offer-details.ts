import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { OfferService } from '../../../services/offer.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'page-offer-details',
  templateUrl: 'offer-details.html',
  providers: [OfferService, ToastService]
})
export class OfferDetailsPage {

  public offer;

  constructor(public navCtrl: NavController, private navParams: NavParams, private toast: ToastService, private offerService: OfferService) {    
    this.offer = new Object();
  }

  ngOnInit(){
    let id = this.navParams.get('id');
    this.offerService.getById(id).subscribe(
      data => {
        this.offer = data;
      },
      err => {
        if(err.status === 0) this.toast.error('Error al comunicarse con el server.');
        else this.toast.error(err.json().message);
      },
      () => console.log('OfferDetailsPage => ngOnInit finished.')
    );
  }

}
