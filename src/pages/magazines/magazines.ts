import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MagazineDetailsPage } from './magazine-details/magazine-details';
import { ToastService } from  '../../services/toast.service';
import { MagazineService } from '../../services/magazine.service';

export interface Magazine {
  id: number;
  description: string;
  images: Array<string>;
}

@Component({
  selector: 'page-magazines',
  templateUrl: 'magazines.html',
  providers: [MagazineService]
})
export class MagazinesPage {

  public magazines: Array<Magazine>;

  constructor(public navCtrl: NavController, public toast: ToastService, public magazineService: MagazineService) {

  }

  ionViewWillEnter(){
    this.magazines = this.getAll();
  }

  getAll() : any[] {
    var magazines = [];
    this.magazineService.getAll().subscribe(
      data => {
        magazines = data;
      },
      err => {
        if(err.status === 0) this.toast.error('Error al comunicarse con el server.');
        else this.toast.error(err.json().message);
      },
      () => console.log('MagazinesPage => done() finished.')
    );
    return magazines;  
  }

  getByIndex(index : number){
    this.navCtrl.push(MagazineDetailsPage, {'images': this.magazines[index].images, 'selected': 0 });
  }

}
