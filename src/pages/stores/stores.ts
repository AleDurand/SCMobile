import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { Geolocation } from 'ionic-native';

import { ToastService } from '../../services/toast.service';

declare var google : any;

@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
  providers: [ToastService]
})
export class StoresPage {

  private map : any;

  constructor(public navCtrl: NavController, private toast: ToastService, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad(){
    let loader = this.loadingCtrl.create({ content: "Loading..." });
    loader.present();
    Geolocation.getCurrentPosition().then(
      (position) => {
        let mapElement = document.getElementById('map');
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let mapOptions = { center: latLng, zoom: 15, mapTypeId: google.maps.MapTypeId.ROADMAP }
        this.map = new google.maps.Map(mapElement, mapOptions);

        let marker = new google.maps.Marker({
          position: latLng,
          map: this.map
        });

        let infoWindow = new google.maps.InfoWindow({ content: "Me!" });
 
        google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open(this.map, marker);
        });

        google.maps.event.addListenerOnce(this.map, 'idle', () => {
          mapElement.classList.add('show-map');
          google.maps.event.trigger(mapElement, 'resize');
        });  

        loader.dismissAll();  
      }, 
      (err) => {
        loader.dismissAll();  
        this.toast.error(err.json().message);
      }
    ).catch((error) => {
      loader.dismissAll();    
      this.toast.error('No se pudo cargar el contenido.');
    });
  }

}
