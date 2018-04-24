import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import 'rxjs';
import { AuthProvider } from '../../providers/auth/auth';

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

  constructor(public navCtrl: NavController, public userdata : AuthProvider) {
    this.getUser();
    
  }
  
  getUser(){
    console.log('ressss:  ',this.userdata.userData.data[0].nameUser);
   this.nom=this.userdata.userData.data[0].nameUser;
   this.prenom=this.userdata.userData.data[0].surnameUser;
   this.login=this.userdata.userData.data[0].login;
   this.motpasse=this.userdata.userData.data[0].password;
   this.rate=this.userdata.userData.data[0].rateUser
   this.email=this.userdata.userData.data[0].login
   this.image=this.userdata.userData.data[0].imgUser

  
   
  
    }
    
  }
  