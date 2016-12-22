import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { OffersPage } from '../pages/offers/offers';
import { MagazinesPage } from '../pages/magazines/magazines';
import { MagazineDetailsPage } from '../pages/magazines/magazine-details/magazine-details';
import { OrdersPage } from '../pages/orders/orders';
import { AddOrderPage } from '../pages/orders/add-order/add-order';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { StoresPage } from '../pages/stores/stores';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { Configuration } from './app.constants';

import { SearchPipe } from '../pipes/search.pipe';
import { ZoomDirective } from '../components/zoom/zoom';

import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';
import { NetworkService } from '../services/network.service';
import { SafeHttp } from '../services/safe-http.service';


@NgModule({
  declarations: [
    MyApp,
    OffersPage,
    ContactPage,
    HomePage,
    MagazinesPage,
    MagazineDetailsPage,
    OrdersPage,
    AddOrderPage,
    StoresPage,
    LoginPage,
    SettingsPage,
    TabsPage,
    SearchPipe,
    ZoomDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp, { tabsPlacement: 'bottom' }), HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OffersPage,
    ContactPage,
    HomePage,
    MagazinesPage,
    MagazineDetailsPage,
    OrdersPage,
    AddOrderPage,
    StoresPage,
    LoginPage,
    SettingsPage,
    TabsPage
  ],
  providers: [Configuration, UserService, Storage, ToastService, NetworkService, SafeHttp]
})
export class AppModule {}
