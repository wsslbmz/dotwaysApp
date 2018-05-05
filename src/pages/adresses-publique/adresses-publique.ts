import { Http } from '@angular/http';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AddadressPage } from '../addadress/addadress';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: 'adresses-pub-details.html',
})
export class AdressesPubDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item=params.data.item;
  }
}



@Component({
  selector: 'page-adresses-publique',
  templateUrl: 'adresses-publique.html'
})
export class AdressesPubliquePage {
  private url : string ="http://147.135.136.78:8052/adress/bytype/";
  public liv : any ;
  public jsonObj ;
  public type: string="publique";


  constructor(public navCtrl: NavController,public http:Http) {
    this.getMsg(this.type);
  }
  goToAddadress(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddadressPage);
  }
  getMsg(type)
  {
    let data:Observable<any>
    data =  this.http.get(this.url+type);
      data.subscribe(
         res => { this.liv = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(this.liv);
         let obj = Array.of(jo.data);
         this.jsonObj = obj[0];
         console.log("resssssss",this.jsonObj);
       });  
} 
openAdressesPubDetailsPage(item) {
  this.navCtrl.push(AdressesPubDetailsPage, { item: item });
}
  
}
