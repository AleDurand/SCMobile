import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { OfferDetailsPage } from './offer-details/offer-details';
import { OfferService } from '../../services/offer.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
  providers: [OfferService, ToastService]
})
export class OffersPage {

  public offers;

  constructor(public navCtrl: NavController, private toast: ToastService, private offerService: OfferService) {
    
  }

  ngOnInit(){
      this.offerService.getAll().subscribe(
      data => {
        this.offers = data;
      },
      err => {
        if(err.status === 0) this.toast.error('Error al comunicarse con el server.');
        else this.toast.error(err.json().message);
      },
      () => console.log('OffersPage => ngOnInit finished.')
    );
  }

  getById(id) {
    this.navCtrl.push(OfferDetailsPage, { id: id });
  }    

}
