import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

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
