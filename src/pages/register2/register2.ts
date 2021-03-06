import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController } from 'ionic-angular';
import { ValidnumPage } from '../validnum/validnum';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-register2',
  templateUrl: 'register2.html'
})

export class Register2Page {
loading: any;
mobileUser : string;
emailUser : string;
login:string;
password:string;
nameUser:string;
surnameUser:string;
public date= new Date();

  constructor(public navCtrl: NavController ,public navparm: NavParams,public auth :UserProvider) {

    this.login = this.navparm.get('login')
    this.password = this.navparm.get('password')
    this.nameUser = this.navparm.get('nameUser')
    this.surnameUser = this.navparm.get('surnameUser')
  }

  ionViewDidLoad(){
    console.log(this.nameUser,this.surnameUser,this.login,this.password);
    }

add(){
  this.auth.addUser(this.login,this.password,this.nameUser,this.surnameUser,this.mobileUser,this.emailUser,this.date,this.nameUser,this.nameUser,this.date,0,"0");
}


  goToValidnum(params){
    if (!params) params = {};
    this.navCtrl.push(ValidnumPage);
    this.add();
    this.auth.loginUser(this.login,this.password).map(res => res.json()).subscribe((res) => {
			if(res.success){
        this.auth.loginUser(this.login, this.password)
        .toPromise()
	    	.then((response) =>
        {
          this.auth.userData = response.json();
        })
				this.navCtrl.setRoot(HomePage);
			}

		}, (err) => {console.log("hhhh")		});


  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
