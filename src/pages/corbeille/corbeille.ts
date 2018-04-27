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
<<<<<<< HEAD

=======
getMsg()
     {
      return new Promise(resolve => {
        this.http.get(this.url)
          .subscribe(data => {
            this.liv = data.json();
            console.log("hhhhh",this.liv);
            resolve(this.liv);
          });
      });
  
  }
>>>>>>> 6f19d63d5d1be6d9f2b39e18309f87c7853563de
}