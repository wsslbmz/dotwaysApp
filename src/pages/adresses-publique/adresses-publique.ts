import { Http } from '@angular/http';
import { Component} from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { AddadressPage } from '../addadress/addadress';
import { Observable } from 'rxjs/Observable';
import { UserProvider } from '../../providers/user/user';
import { AdressProvider } from '../../providers/adress/adress';

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
  
  public liv : any ;
  public jsonObj :any;
  public type: string="publique";


  constructor(public navCtrl: NavController,public http:Http,public adr : AdressProvider, public alertCtrl:AlertController) {
  this.getAdressPb(this.type);
  }

  getAdressPb(type)
  {
    let data 
    data =  this.http.get(this.adr.url+"bytype/"+type);
      data.subscribe(
         res => { let result = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(result);
         let obj = Array.of(jo.data);
         this.jsonObj = obj[0];
        });  
  } 
  
  
  goToAddadress(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddadressPage);
  }
  
openAdressesPubDetailsPage(item) {
  this.navCtrl.push(AdressesPubDetailsPage, { item: item });
}
  
}
