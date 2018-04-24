import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { MapsComponent } from '../components/maps/maps';
import { ProfilePage } from '../pages/profile/profile';
import { HistoriquePage } from '../pages/historique/historique';
import { CorbeillePage } from '../pages/corbeille/corbeille';
import { NotificationPage } from '../pages/notification/notification';
import { ConfigurationPage } from '../pages/configuration/configuration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToAdresses(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TabsControllerPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToHistorique(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoriquePage);
  }goToCorbeille(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CorbeillePage);
  }goToNotification(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NotificationPage);
  }goToConfiguration(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConfigurationPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }
}