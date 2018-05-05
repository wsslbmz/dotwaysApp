import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';



@Component({
  templateUrl: 'driver-details.html',
})
export class DriverDetailsPage {
  item1;

  constructor(params: NavParams) {
    this.item1=params.data.item;
  }
}

@Component({
  templateUrl: 'historique-details.html',
})
export class HistoriqueDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item=params.data.item;
  }
}

@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html'
  
})

export class HistoriquePage {
  private url : string ="http://147.135.136.78:8052/delivery/iduser/";
  public liv : any ;
  public id :string=this.auth.userData.data[0].idUser;
  public jsonObj ;

  private url1 : string ="http://147.135.136.78:8052/trip/iduser/";
  public trip : any ;
  public jsonObj1;

  constructor(public navCtrl: NavController ,public auth:AuthProvider,public http:Http) {
  this.getMsg(this.id);
  this.getTrip(this.id);
}
  getMsg(id)
  {
    let datad:Observable<any>
    datad =  this.http.get(this.url+id);
      datad.subscribe(
         res => { this.liv = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(this.liv);
         let obj = Array.of(jo.data);
         this.jsonObj = obj[0];
         console.log("resssssss",this.jsonObj);
       });  
} 
getTrip(id)
{
  let data:Observable<any>
  data =  this.http.get(this.url1+id);
    data.subscribe(
       res => { this.trip = res['_body'];
       console.log("-------->",res)
       let jo = JSON.parse(this.trip);
       let obj = Array.of(jo.data);
       this.jsonObj1 = obj[0];
       console.log("--------->",this.jsonObj1);
     });  
} 

openHisDetailsPage(item) {
  this.navCtrl.push(HistoriqueDetailsPage, { item: item });
}
openDriverDetailsPage(item1) {
  this.navCtrl.push(DriverDetailsPage, { item: item1 });
}
}
  

