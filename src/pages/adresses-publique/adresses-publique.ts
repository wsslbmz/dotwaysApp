import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddadressPage } from '../addadress/addadress';

@Component({
  selector: 'page-adresses-publique',
  templateUrl: 'adresses-publique.html'
})
export class AdressesPubliquePage {

  constructor(public navCtrl: NavController) {
  }
  goToAddadress(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddadressPage);
  }
  
}
