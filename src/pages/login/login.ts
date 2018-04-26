import { Component } from '@angular/core';
import { NavController , NavParams, LoadingController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { FormControl,Validators , FormGroup } from '@angular/forms';


import { AuthProvider } from '../../providers/auth/auth';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { Register2Page } from '../register2/register2';
import { ValidnumPage } from '../validnum/validnum';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})


export class LoginPage {
  userForm : FormGroup;
  isUserLoggedIn:any = false;
  userInfo:any={};
  users: any;
  loading: any;
  login: string;
	password: string;
  
  

  constructor(public navCtrl: NavController, private gp : GooglePlus ,private fb: Facebook , public navParams: NavParams, 
				public loadingCtrl: LoadingController, public auth: AuthProvider ) {


this.userForm = new FormGroup({
          loginCtl :new FormControl('',[Validators.required,Validators.minLength(3)]),
          passwordCtl :new FormControl('',[Validators.required,Validators.minLength(3)])
})

  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }goToRegister2(params){
    if (!params) params = {};
    this.navCtrl.push(Register2Page);
  }goToValidnum(params){
    if (!params) params = {};
    this.navCtrl.push(ValidnumPage);
  }
  


  
	authlogin(){

		this.showLoader();

		this.auth.login(this.login, this.password).map(res => res.json()).subscribe((res) => {

			this.loading.dismiss();

			if(res.success){
        this.auth.login(this.login, this.password)
        .toPromise()
	    	.then((response) =>
        {
          this.auth.userData = response.json();
          console.log('API Response : ', response.json());
          console.log('API Response2 : ', response);
        })
				this.navCtrl.setRoot(HomePage);
			}

		}, (err) => {
			this.loading.dismiss();
		});

	}

	showLoader(){
	
		this.loading = this.loadingCtrl.create({
			content: 'Authenticating...'
		});

		this.loading.present();

	}


  loginGP(){
    this.gp.login().then(res =>
    {
      console.log(res);
      this.userInfo = res;
      this.isUserLoggedIn= true;
    }).catch(err => console.error(err));
  }

  logoutGP(){
    this.gp.logout().then(() => {
      this.isUserLoggedIn=false;
    })
  }

  loginFB() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isUserLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isUserLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  logoutFB() {
    this.fb.logout()
      .then( res => this.isUserLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }

  getUserDetail(userid) {
    this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
  }

} 
