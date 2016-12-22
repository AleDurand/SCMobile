import { Component, ViewChild } from '@angular/core';
import { AlertController, Nav, Platform, Events, MenuController, LoadingController } from 'ionic-angular';
import { StatusBar, Splashscreen, Push } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { OffersPage } from '../pages/offers/offers';
import { MagazinesPage } from '../pages/magazines/magazines';
import { OrdersPage } from '../pages/orders/orders';
import { StoresPage } from '../pages/stores/stores';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';

import { UserService } from '../services/user.service';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  public rootPage: any = HomePage;

  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
    { title: 'Inicio', component: HomePage, icon: 'home' },
    { title: 'Ofertas', component: OffersPage, icon: 'pricetag' },
    { title: 'Folletos', component: MagazinesPage, icon: 'images' },
    { title: 'Mis pedidos', component: OrdersPage, icon: 'cart' },
    { title: 'Sucursales', component: StoresPage, icon: 'pin' },
    { title: 'Contacto', component: ContactPage, icon: 'contact' },
    { title: 'Configuraciones', component: SettingsPage, icon: 'settings' }
  ];
  loggedInPages: PageInterface[] = [
    { title: 'Logout', component: HomePage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', component: LoginPage, icon: 'log-in' },
  ];

  constructor(public platform: Platform, private alertCtrl: AlertController, public events: Events, public menu: MenuController, public userService: UserService, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.initPush();
    });
    userService.isLoggedIn().then(
      (loggedIn) => this.enableMenu(loggedIn)
    );
    
    this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {    
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index});
    } else {
      this.nav.setRoot(page.component);
    }

    if (page.logsOut === true) {
      this.userService.logout();
    }
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => { 
      this.enableMenu(true);
      this.nav.setRoot(HomePage);
    });
    this.events.subscribe('user:logout', () => { 
      this.enableMenu(false); 
      this.nav.setRoot(HomePage);
    });      
  }

  enableMenu(loggedIn){
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  initPush() {
    let push = Push.init({
      android: { senderID: "1031748853944" },
      ios: { alert: "true", badge: false, sound: "true" },
      windows: {}
    });

    if(this.platform.is('cordova')){
      push.on('registration', (data) => {
        console.log("device token ->", data.registrationId);
        let alert = this.alertCtrl.create({
          title: 'Registration id',
          subTitle: data.registrationId ,
          buttons: ['Dismiss']
        });
        alert.present();
      });

      push.on('notification', (data) => {
        console.log('message', data.message);
        this.nav.push(HomePage);
      });
    
      push.on('error', (e) => {
        console.log(e.message);
      });
    }  

  }

}
