import { Component } from '@angular/core';
import { NavController, LoadingController,AlertController } from 'ionic-angular';
import 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';
import { Http, Headers ,RequestOptions } from '@angular/http';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public nom ;
  public prenom;
  public login;
  public motpasse;
  public rate;
  public image;
  public email;
  public mobile;
  public id;
  public hide : boolean ;

  newLogin:string;
  newEmail:string;
  newName:string;
  newSurname:string ;
  date = new Date;    
  url: string = 'http://147.135.136.78:8052/user/update/'

  constructor(public navCtrl: NavController, public userdata : AuthProvider ,public alertCtrl:AlertController,public http : Http) {
    this.getUser();
    this.hide = false;
    
  }
  
  getUser(){
    console.log('ressss:  ',this.userdata.userData.data[0].nameUser);
        this.id=this.userdata.userData.data[0].idUser
        this.nom=this.userdata.userData.data[0].nameUser;
        this.prenom=this.userdata.userData.data[0].surnameUser;
        this.login=this.userdata.userData.data[0].login;
        this.motpasse=this.userdata.userData.data[0].password;
        this.rate=this.userdata.userData.data[0].rateUser;
        this.email=this.userdata.userData.data[0].login;
        this.image=this.userdata.userData.data[0].imgUser;
        this.mobile=this.userdata.userData.data[0].mobileUser;
    }

  hideElem(){
    this.hide= true;
    console.log("jjjjjjjj");
    console.log(this.newEmail,this.newName,this.newSurname,this.newLogin)
    this.checkProfile();
  }
  saveModifiation(){
    let alert = this.alertCtrl.create({
      title: 'Sure !',
      message: 'tu es sure de faire les modification ?',
  
      buttons: [
        {
          text: 'annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.hide = false ;
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log('accept clicked');
            this.updateProfile("aa","aa","aa","aa",this.date,"aa");
            this.hide = false;
          }
        }
      ]
    });
    alert.present();
  }

  updateProfile (login,nameUser,surnameUser,emailUser,updateday,updateby)
  {
      var headers = new Headers();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json' );
      let options = new RequestOptions({ headers: headers });
   
      let userdata = {
        nameUser: nameUser,
        login:login,
        surnameUser:surnameUser,
        emailUser:emailUser,
        updateday:updateday,
        updateby:updateby
      }
    
       this.http.post(this.url+this.id, userdata ,options).subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
  
      });
  
    }

  checkProfile(){
    if(!this.newName || !this.newSurname || !this.newLogin|| !this.newEmail){
      console.log("false from check");
      return false;
    }
    else{
      console.log("true from check");
      return true;
    }
  }
}


  
  
  