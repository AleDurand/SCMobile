import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';

import { ToastService } from './toast.service';

@Injectable()
export class NetworkService {

  constructor(private toast: ToastService) {

  }

  noConnection() {
    return (Network.connection === 'none');
  }


  showNetworkToast() {
    this.toast.error('Por favor verifica tu conexion a internet.');
  }

}