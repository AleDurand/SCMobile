import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { ToastService } from  '../../../services/toast.service';
import { MagazineService } from '../../../services/magazine.service';

export interface Image {
  id: number;
  path: string;
}

@Component({
  selector: 'page-magazine-details',
  templateUrl: 'magazine-details.html',
  providers: [MagazineService]
})
export class MagazineDetailsPage {

  public images: Array<Image>;
  public selected: number;
  public sliderOptions;

  @ViewChild('magazineSlider') slider: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toast: ToastService, public magazineService: MagazineService) {
    this.images = navParams.get('images');
    this.selected = navParams.get('selected');    
    this.sliderOptions = { initialSlide: this.selected, loop: false, pager: true };
  }

  onSlideChanged(){
    try {
      this.selected = this.slider.getActiveIndex();   
    } catch (error){
      console.log("Unexpected error: " + error);
    }
  }

  getActiveIndex() {
    try {
      return this.slider.getActiveIndex() + 1;
    } catch (error) {
      return this.selected + 1;  
    }
    
  }

}
