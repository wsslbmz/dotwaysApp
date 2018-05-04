import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MapsComponent } from '../maps/maps';
import { AlertController } from 'ionic-angular';
import { AddAdressProvider } from '../../providers/add-address/add-address';
import { AuthProvider } from '../../providers/auth/auth';
AuthProvider
declare var google : any;

@Component({
  selector: 'addadress',
  templateUrl: 'addadress.html'
})
export class AddadressComponent implements OnChanges{

  @Input() mapstop :boolean;
  @Input() map ;

  private Marker ;
  // private popup ;
  index : any;
  contactName : any;
  contactNum :any;
  contactLabel:any;
  adrPosition = new google.maps.LatLng();
  typeadr :any;
  sharedtoNum :any;
  public date = new Date();


  constructor(public alertCtrl : AlertController , public addadressP : AddAdressProvider,public auth :AuthProvider) {
    console.log('Hello AddadressComponent Component');
    this.Alert1();
    this.index=0;
  }
  ngOnChanges(changes){
    console.log(this.mapstop);
    if(!this.mapstop){
      this.hideMarker();
    }
    else{
      this.showMarker();
    }
  }
  showMarker(){

    this.Marker =  new google.maps.Marker({
      map : this.map,
      animation : google.maps.Animation.BOUNCE,
      position : this.map.getCenter(),
      icon : 'assets/imgs/bg_pin.png'
    })
    setTimeout(() => {
      this.Marker.setAnimation(null)
    }, 750);
    // let markerlocation = new google.maps.LatLng();
    // markerlocation = this.Marker.getPosition();
    // console.log(markerlocation.lat());
    // console.log(markerlocation.lng());
    this.markerLocation();
  }
  markerLocation(){
    let markerlocation = new google.maps.LatLng();
    markerlocation = this.Marker.getPosition();
    console.log((markerlocation.lat()).toString());
    console.log(markerlocation.lng());
    console.log(markerlocation)
    this.adrPosition = markerlocation;
    console.log((this.adrPosition.lat()).toString());
    console.log((this.adrPosition.lng()).toString());
    return (markerlocation);
  }
  hideMarker(){
    if(this.Marker){
      this.Marker.setMap(null);
    }
  }
  prevStep(){
    this.index--;
    this.steps();
    }  
  nextStep(){
      this.index++;
      this.steps();
    }
  steps(){
      console.log(this.index);
      switch (this.index){
      case 0 :
        this.setPostion();
      break;
      case 1 :
        this.setContact();
        break;
    
      case 2 :
        this.setTypeadr();
        break;
    
      case 3 :
        this.sharedTo();
        break;
    
      case 4 :
        break;
    }
    }

  setPostion(){
this.markerLocation();  }
  setContact(){
  this.contactAlert();
  }
  setTypeadr(){
  this.typeadrAlert();
  }
  sharedTo(){
  this.sharedtoAlert();
  }

  Alert1() {
    let alert = this.alertCtrl.create({
      title: 'Choisir la postion ',
      subTitle: 'glisser le map pour choisir la postion',
      buttons: ['Ok']
    });
    alert.present();
  }

  contactAlert() {
    let alert = this.alertCtrl.create({
      title: 'Contact',
      message: 'veuillez saisir les info de destinataire',
      inputs: [
        {
          name: 'Label',
          placeholder: 'Label '
        },
        {
          name: 'Nom',
          placeholder: 'Nom '
        },
        {
          name: 'Numero',
          placeholder: 'numero de telephone',
          type: 'tel'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.prevStep();
          }
        },
        {
          text: 'Suivant',
          handler: data => {
            console.log(data.Nom);
            console.log(data.Numero);
            this.contactName = data.Nom ;
            this.contactNum = parseInt(data.Numero) ;
            this.contactLabel = data.Label;
            console.log(this.contactNum);

            this.nextStep();
          }
        }
      ]
    });
    alert.present();
  }
  typeadrAlert() {
    let alert = this.alertCtrl.create({
      title: 'Type address',
      message: 'publique ou privee',
      inputs: [
        {
          label: 'Privee',
          type: 'radio',
          checked : true ,
          value : 'privee'
        },
        {
          label: 'Publique',
          type: 'radio',
          value : 'publique'
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.prevStep();
          }
        },
        {
          text: 'Suivant',
          handler: (data:string) => {
            console.log(data);
            this.typeadr = data ;
            this.nextStep();
          }
        }
      ]
    });
    alert.present();
  }
  sharedtoAlert() {
    let alert = this.alertCtrl.create({
      title: 'Partager',
      message: 'veuillez saisir un numero',
      inputs: [
        {
          name: 'Numero',
          placeholder: 'numero de telephone',
          type: 'tel'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.prevStep();
          }
        },
        {
          text: 'Suivant',
          handler: data => {
            console.log(data.Numero);
            this.sharedtoNum = data.Numero ;
            this.nextStep();
            this.addAdress();
          }
        }
      ]
    });
    alert.present();
  }
  addAdress(){
    this.addadressP.addadress((this.adrPosition.lat()).toString(),
                              (this.adrPosition.lng()).toString(),
                              this.date,
                              this.auth.userData.data[0].idUser,
                              this.auth.userData.data[0].idUser,
                              this.date,
                              this.contactLabel,
                              this.contactName,
                              this.contactNum,
                              this.typeadr,
                              this.sharedtoNum,
                              this.auth.userData.data[0].nameUser+" "+this.auth.userData.data[0].surnameUser)
  }
  // this.addadressP.addadress("xxxxxxxx","yyyyyyyyy",this.date,"wassel","wassel",this.date,"bureau","wassel",53108705,"privee","1111111");
  // }
}
