import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { OfferService } from '../../services/offer.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
  providers: [OfferService, ToastService]
})
export class OffersPage {

  public offers;
  public items = [];
  public ig = 0;

  constructor(public navCtrl: NavController, private toast: ToastService, private offerService: OfferService) {    
    for ( this.ig ; this.ig < 10; this.ig++) {
      this.items.push(this.offerService.getOfer(this.ig));
    }
  }

  // ngOnInit(){
  //     this.offerService.getAll().subscribe(
  //     data => {
  //       this.offers = data;
  //     },
  //     err => {
  //       if(err.status === 0) this.toast.error('Error al comunicarse con el server.');
  //       else this.toast.error(err.json().message);
  //     },
  //     () => console.log('OffersPage => ngOnInit finished.')
  //   );
  // }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {      
      var fin = this.ig + 10;
      for (this.ig; this.ig < fin ; this.ig++) {
        this.items.push( this.offerService.getOfer(this.ig));
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
