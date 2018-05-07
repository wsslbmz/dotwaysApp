import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RealtimenavPage } from '../realtimenav/realtimenav';
@Component({
  selector: 'page-corbeille',
  templateUrl: 'corbeille.html'
})

export class CorbeillePage {
public hide : boolean;
  constructor(public navCtrl: NavController) {  
    this.hide=true; 
  }
hideelem(){  
  this.hide=false;
  console.log(this.hide)
}
goToRealTime(params){
  if (!params) params = {};
  this.navCtrl.setRoot(RealtimenavPage);
  }

}