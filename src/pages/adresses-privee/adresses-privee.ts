import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { AddadressPage } from '../addadress/addadress';
import { UserProvider } from '../../providers/user/user';
import { AdressProvider } from '../../providers/adress/adress';

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
  public liv : any ;
  public jsonObj ;
  public typeAdr: string="privee";
  public userAdr:string=this.auth.userData.data[0].idUser;

  constructor(public navCtrl: NavController,public http:Http,public auth : UserProvider, public adr :AdressProvider) {
    this.getAdressPr(this.typeAdr,this.userAdr,this.liv)
  }

  getAdressPr(typeAdr,userAdr,result)
  {
    let data:Observable<any>
    data =  this.http.get(this.adr.url+"bytypeanduser?typeAdr="+typeAdr+"&userAdr="+userAdr);
      data.subscribe(
         res => { result = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(result);
         let obj = Array.of(jo.data);
         this.jsonObj = obj[0];
         console.log("resssssss",this.jsonObj);
       });  
  } 


  goToAddadress(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddadressPage);
  }
  

openAdressesPriveeDetailsPage(item) {
  this.navCtrl.push(AdressesPriveeDetailsPage, { item: item });
}

}
