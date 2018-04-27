import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetHisotiqueProvider } from '../../providers/get-hisotique/get-hisotique';
import { Http } from '@angular/http';

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

}