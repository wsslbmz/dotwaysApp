import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AddadressPage } from '../addadress/addadress';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  templateUrl: 'adresses-privee-details.html',
})
export class AdressesPriveeDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item=params.data.item;
  }
}



@Component({
  selector: 'page-adresses-privee',
  templateUrl: 'adresses-privee.html'
})
export class AdressesPriveePage {
  private url : string ="http://147.135.136.78:8052/adress/";
  public liv : any ;
  public jsonObj ;
  public typeAdr: string="privee";
  public userAdr:string=this.auth.userData.data[0].idUser;

  constructor(public navCtrl: NavController,public http:Http,public auth : AuthProvider ) {
    this.getMsg(this.typeAdr,this.userAdr)
  }
  goToAddadress(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddadressPage);
  }
  getMsg(typeAdr,userAdr)
  {
    let data:Observable<any>
    data =  this.http.get(this.url+"bytypeanduser?typeAdr="+typeAdr+"&userAdr="+userAdr);
      data.subscribe(
         res => { this.liv = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(this.liv);
         let obj = Array.of(jo.data);
         this.jsonObj = obj[0];
         console.log("resssssss",this.jsonObj);
       });  
} 

openAdressesPriveeDetailsPage(item) {
  this.navCtrl.push(AdressesPriveeDetailsPage, { item: item });
}

}
