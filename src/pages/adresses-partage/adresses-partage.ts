import { AuthProvider } from './../../providers/auth/auth';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'adresses-partage-details.html',
})
export class AdressesPartageDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item=params.data.item;
  }
}


@Component({
  selector: 'page-adresses-partage',
  templateUrl: 'adresses-partage.html'
})
export class AdressesPartagePage {
  private url : string ="http://147.135.136.78:8052/adress/bysharedto/";
  public liv : any ;
  public jsonObj ;
  public mobile=this.auth.userData.data[0].mobileUser;

  constructor(public navCtrl: NavController,public http : Http,public auth : AuthProvider) {
    this.getMsg(this.mobile)
  }
  
  getMsg(mobile)
  {
    let data:Observable<any>
    data =  this.http.get(this.url+mobile);
      data.subscribe(
         res => { this.liv = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(this.liv);
         let obj = Array.of(jo.data);
         this.jsonObj = obj[0];
         console.log("resssssss",this.jsonObj);
       });  
} 
  
openAdressesPartageDetailsPage(item) {
  this.navCtrl.push(AdressesPartageDetailsPage, { item: item });
}
  

}
