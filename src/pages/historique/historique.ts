import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
AuthProvider
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html'
})
export class HistoriquePage {
  private url : string ="http://147.135.136.78:8052/delivery/iduser/";
  public liv : any ;
  public id :string=this.auth.userData.data[0].idUser;
  public jsonObj ;

  constructor(public navCtrl: NavController ,public auth:AuthProvider,public http:Http) {
  this.getMsg(this.id);
  }

  getMsg(id)
  {
    let datad:Observable<any>
    datad =  this.http.get(this.url+id);
      datad.subscribe(
         res => { this.liv = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(this.liv);
         let obj = Array.of(jo.Data);
         this.jsonObj = obj[0];
         console.log("resssssss",this.jsonObj);
       });  
} 
}
  

