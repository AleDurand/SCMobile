import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Geolocation, GoogleMap, GoogleMapsLatLng, GoogleMapsMarkerOptions } from 'ionic-native';

import { ToastService } from '../../services/toast.service';

//declare var google : any;

@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html'
})
export class StoresPage {

  private map : GoogleMap;

  constructor(public navCtrl: NavController, private toast: ToastService, public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad(){
    let loader = this.loadingCtrl.create({ content: "Loading..." });
    loader.present();
    Geolocation.getCurrentPosition().then(
      (position) => {
        let mapElement = document.getElementById('map');
        let latLng = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);
        this.map = new GoogleMap(mapElement, {
          'backgroundColor': 'white',
          'controls': { 'compass': true, 'myLocationButton': true, 'indoorPicker': true, 'zoom': true },
          'gestures': { 'scroll': true, 'tilt': true, 'rotate': true, 'zoom': true },
          'camera': { 'latLng': latLng, 'tilt': 30, 'zoom': 15, 'bearing': 50 }
        });

        let marker : GoogleMapsMarkerOptions = { position: latLng, title: 'Me!' };        
        this.map.addMarker(marker);

        loader.dismissAll();  
      }, 
      (err) => {
        loader.dismissAll();  
        this.toast.error(err.json().message);
      }
    ).catch((error) => {
      loader.dismissAll();  
      console.log(error);  
      this.toast.error('No se pudo cargar el contenido.');
    });
  }

}