import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdressesPriveePage } from '../adresses-privee/adresses-privee';
import { AdressesPubliquePage } from '../adresses-publique/adresses-publique';
import { AdressesPartagePage } from '../adresses-partage/adresses-partage';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = AdressesPriveePage;
  tab2Root: any = AdressesPubliquePage;
  tab3Root: any = AdressesPartagePage;
  constructor(public navCtrl: NavController) {
  }
  
}
