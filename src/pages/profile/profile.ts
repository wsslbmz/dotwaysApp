import { Component } from '@angular/core';
import { NavController, LoadingController,AlertController,ToastController } from 'ionic-angular';
import 'rxjs';
import { Http, Headers ,RequestOptions } from '@angular/http';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';


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
  loading :any;   

  constructor(public navCtrl: NavController, public toast : ToastController,public userdata : UserProvider ,public alertCtrl:AlertController,public http : Http,public loadingCtrl: LoadingController) {
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
    if(this.checkProfile()){
    this.saveModifiation();
    }
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
            this.userdata.updateUser(this.id,this.newLogin,this.newName,this.newSurname,this.newEmail,this.date,this.id);
            this.getUser();
            this.hide = false;
          }
        }
      ]
    });
    alert.present();

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

  updatePassword(){
    let alert = this.alertCtrl.create({
      title: 'Changement mot de passe',
      inputs: [
        {          
          name : 'pass1',
          label: 'Nouveau mot de passe',
          type : 'password'
        },
        {
          name : 'pass2',
          label: 'Confirmer le mot de passe',
          type : 'password'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Modifier',
          handler: data => {
            if (data.pass1 == data.pass2){
            this.userdata.updateUserPassword(this.id,data.pass1);
            this.presentToast("Mot de passe change correctement");

            }
            else{
              this.presentToast("Erreur lors de changement du mot de passe");
            }
          }
        }
      ]
    });
    alert.present();
  }

  presentToast(msg) {
    let toast = this.toast.create({
      message: msg,
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
// authlogin(){
//   this.showLoader();
//   this.userdata.loginUser(this.newLogin, this.motpasse).map(res => res.json()).subscribe((res) => {
//   this.loading.dismiss();
//     if(res.success){
//       this.userdata.loginUser(this.newLogin, this.motpasse)
//       .toPromise()
//       .then((response) =>
//       {
//         this.userdata.userData = response.json();
//         console.log('API Response : ', response.json());
//       })
//     }
//   }, (err) => {
//     this.loading.dismiss();
//     let alert = this.alertCtrl.create({
//       title: 'Echec de Connexion',
//       message: 'Le logoin ou le mot de passe est incorect',
//       buttons: [
//         {text: 'OK',
//          handler: () => {
//          console.log('ok clicked');
//           }
//         }]
//     });
//     alert.present();
//   });
//   console.log(this.userdata.userData);
// }
// showLoader(){
//   this.loading = this.loadingCtrl.create({
//     content: 'saving...'
//   });
//   this.loading.present();
// }

}
  
  
  