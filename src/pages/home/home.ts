import { Component , Input} from '@angular/core';
import { AlertController } from 'ionic-angular';
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
  
  constructor(public alertCtrl: AlertController) {
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
}
