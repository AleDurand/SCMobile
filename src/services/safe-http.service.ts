import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

import { NetworkService } from './network.service';

@Injectable()
export class SafeHttp {

  constructor(private http: Http, private networkService: NetworkService) {
  
  }

  get(url: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) this.networkService.showNetworkToast();
    else return this.http.get(url, options);
  }

  put(url: string, body: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) this.networkService.showNetworkToast();
    else return this.http.put(url, body, options);
  }

  post(url: string, body: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) this.networkService.showNetworkToast();
    else return this.http.post(url, body, options);
  }

  delete(url: string, options?: RequestOptionsArgs) {
    if (this.networkService.noConnection()) this.networkService.showNetworkToast();
    else return this.http.delete(url, options);
  }

}