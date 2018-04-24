import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TakephotoPage } from '../takephoto/takephoto';

@Component({
  selector: 'page-validnum',
  templateUrl: 'validnum.html'
})
export class ValidnumPage {

  constructor(public navCtrl: NavController) {
  }
  goToSetpic(params){
    if (!params) params = {};
    this.navCtrl.push(TakephotoPage);
  }
}
