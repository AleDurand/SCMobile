import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { OffersPage } from '../pages/offers/offers';
import { MagazinesPage } from '../pages/magazines/magazines';
import { OrdersPage } from '../pages/orders/orders';
import { AddOrderPage } from '../pages/orders/add-order/add-order';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { StoresPage } from '../pages/stores/stores';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { Configuration } from './app.constants';
import { SearchPipe } from '../pipes/search.pipe';
import { NetworkService } from '../services/network.service';
import { SafeHttp } from '../services/safe-http.service';

@NgModule({
  declarations: [
    MyApp,
    OffersPage,
    ContactPage,
    HomePage,
    MagazinesPage,
    OrdersPage,
    AddOrderPage,
    StoresPage,
    SettingsPage,
    TabsPage,
    SearchPipe
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
    OrdersPage,
    AddOrderPage,
    StoresPage,
    SettingsPage,
    TabsPage
  ],
  providers: [Configuration, NetworkService, SafeHttp]
})
export class AppModule {}
