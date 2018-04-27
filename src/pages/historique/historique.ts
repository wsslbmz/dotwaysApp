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
  public item:any;
  public jsonObj ;

  constructor(public navCtrl: NavController ,public auth:AuthProvider,public http:Http) {
   console.log('lllllll::::',auth.userData.data[0].idUser);
  this.getMsg(this.id);
  this.item=[
    {title:"ali"},
    {title:"ali"},
    {title:"ali"}
  ]
  }
  getMsg(id)
  {{
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




  // getMsg(id)
  // {
  //  return new Promise(resolve => {
  //    this.http.get(this.url+id)
  //      .subscribe(data => {
  //      this.liv = data.json();
  //        console.log("hhhhh",this.liv);
  //        resolve(this.liv);
  //      });
  //  });

}


  
}
  

