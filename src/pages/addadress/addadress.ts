import { Component , Input} from '@angular/core';
import { AlertController } from 'ionic-angular';
import { MapsComponent } from '../../components/maps/maps';
import { ContentDrawer } from '../../components/content-drawer/content-drawer';
import { AddadressComponent } from '../../components/addadress/addadress';
@Component({
  selector: 'page-addadress',
  templateUrl: 'addadress.html',
})

export class AddadressPage {

  public displaycomponent;

  constructor() {
    console.log(this.displaycomponent);
  }

  dispalycomponent = "addadress";
  

}
