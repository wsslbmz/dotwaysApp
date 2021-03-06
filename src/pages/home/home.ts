import { Component , Input} from '@angular/core';
import { AlertController, Nav } from 'ionic-angular';
import { MapsComponent } from '../../components/maps/maps';
import { SendpackageComponent } from '../../components/sendpackage/sendpackage';
import { ContentDrawer } from '../../components/content-drawer/content-drawer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public hide :boolean;
  drawerOptions: any;
public displaycomponent ;
  
  constructor(public alertCtrl: AlertController, public nav : Nav) {
    this.hide =true;
    this.drawerOptions = {
      handleHeight: 20,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }
  dispalycomponent = "sendpackage";

  hideelem(){  
    this.hide=false;
    console.log(this.hide)
  }
  ionViewWillEnter() {
    this.nav.swipeBackEnabled = false;
    
}
}
