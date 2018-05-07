import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { AdressProvider } from '../../providers/adress/adress';


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
  public liv : any ;
  public jsonObj ;
  public mobile=this.auth.userData.data[0].mobileUser;

  constructor(public navCtrl: NavController,public http : Http,public auth : UserProvider ,public adr :AdressProvider) {
    this.getAdressShared(this.mobile,this.liv)
  }
  getAdressShared(mobile,result)
  {
    let data:Observable<any>
    data =  this.http.get(this.adr.url+"bysharedto/"+mobile);
      data.subscribe(
         res => { result = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(result);
         let obj = Array.of(jo.data);
         this.jsonObj = obj[0];
         console.log("resssssss",this.jsonObj);
       });  
  }
  
  
openAdressesPartageDetailsPage(item) {
  this.navCtrl.push(AdressesPartageDetailsPage, { item: item });
}
  

}
