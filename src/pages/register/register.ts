import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register2Page } from '../register2/register2';
import { ValidnumPage } from '../validnum/validnum';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
login:string;
password:string;
nameUser:string;
surnameUser:string;


  constructor(public navCtrl: NavController) {
  }
  goToRegister2(params){
    if (!params) params = {};
    this.navCtrl.push(Register2Page,{login:this.login,
                                     password:this.password,
                                     nameUser:this.nameUser,
                                     surnameUser:this.surnameUser});
  }goToValidnum(params){
    if (!params) params = {};
    this.navCtrl.push(ValidnumPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
}
