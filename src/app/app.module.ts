import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FileTransfer} from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { LocalNotifications } from "@ionic-native/local-notifications"

import { MyApp } from './app.component';
import { MapsComponent } from '../components/maps/maps';
import { HomePage } from '../pages/home/home';

import { AdressesPriveePage } from '../pages/adresses-privee/adresses-privee';
import { AdressesPubliquePage } from '../pages/adresses-publique/adresses-publique';
import { AdressesPartagePage } from '../pages/adresses-partage/adresses-partage';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ValidnumPage } from '../pages/validnum/validnum';
import { Register2Page } from '../pages/register2/register2';
import { TakephotoPage } from '../pages/takephoto/takephoto';
import { ProfilePage } from '../pages/profile/profile';
import { HistoriquePage } from '../pages/historique/historique';
import { CorbeillePage } from '../pages/corbeille/corbeille';
import { NotificationPage } from '../pages/notification/notification';
import { ConfigurationPage } from '../pages/configuration/configuration';


import { IonicStorageModule } from '@ionic/storage';
import {ContentDrawer} from '../components/content-drawer/content-drawer';
import { HttpModule } from '@angular/http';


import { AuthProvider } from '../providers/auth/auth';
import { AdduserProvider } from '../providers/adduser/adduser';
import { SendpackageComponent } from '../components/sendpackage/sendpackage';
import { AddDeliveryProvider } from '../providers/add-delivery/add-delivery';
import { AddadressPage } from '../pages/addadress/addadress';
import { AddadressComponent } from '../components/addadress/addadress';
import { RealtimenavPage } from '../pages/realtimenav/realtimenav';
import { AddAdressProvider } from '../providers/add-address/add-address';
import { GetHisotiqueProvider } from '../providers/get-hisotique/get-hisotique';
import { RealtimenavComponent } from '../components/realtimenav/realtimenav';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdressesPriveePage,
    AdressesPubliquePage,
    AdressesPartagePage,
    TabsControllerPage,
    LoginPage,
    RegisterPage,
    ValidnumPage,
    Register2Page,
    TakephotoPage,
    MapsComponent,
    ProfilePage,
    HistoriquePage,
    CorbeillePage,
    ConfigurationPage,
    NotificationPage,
    AddadressPage,
    ContentDrawer,
    SendpackageComponent,
    AddadressComponent,
    RealtimenavPage,
    RealtimenavComponent
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdressesPriveePage,
    AdressesPubliquePage,
    AdressesPartagePage,
    TabsControllerPage,
    LoginPage,
    RegisterPage,
    ValidnumPage,
    Register2Page,
    TakephotoPage,
    MapsComponent,
    ProfilePage,
    HistoriquePage,
    CorbeillePage,
    ConfigurationPage,
    NotificationPage,
    AddadressPage,
    AddadressComponent,
    RealtimenavPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AdduserProvider,
    FileTransfer,
    Camera,
    GooglePlus,
    Facebook,
    AddDeliveryProvider,
    AddAdressProvider,
    LocalNotifications,
    GetHisotiqueProvider
  ]
})
export class AppModule {}
