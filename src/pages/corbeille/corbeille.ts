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
private url : string ="http://147.135.136.78:8052/delivery/all";
public liv : any ;

  constructor(public navCtrl: NavController, public http : Http) {  
    this.hide=true; 
    this.getMsg();
  }
hideelem(){  
  this.hide=false;
  console.log(this.hide)
}
getMsg()
     {
      return new Promise(resolve => {
        this.http.get(this.url)
          .subscribe(data => {
            this.liv = data;
            console.log("hhhhh",this.liv);
            resolve(this.liv);
          });
      });
  
  }
}