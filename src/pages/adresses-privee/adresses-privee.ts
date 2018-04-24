import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddadressPage } from '../addadress/addadress';

@Component({
  selector: 'page-adresses-privee',
  templateUrl: 'adresses-privee.html'
})
export class AdressesPriveePage {

  constructor(public navCtrl: NavController ) {
  }
  goToAddadress(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddadressPage);
  }
}
