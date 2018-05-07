import { Component, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { MapsComponent } from '../maps/maps';
import { TripProvider } from '../../providers/trip/trip';
import { UserProvider } from '../../providers/user/user';


declare var google : any;

@Component({
  selector: 'sendpackage',
  templateUrl: 'sendpackage.html'
})
export class SendpackageComponent implements OnChanges {
  
 
  @Input() mapstop :boolean;
  @Input() map ;


  hide1: boolean;
  hide2: boolean;
  hide3: boolean;
  srcPosition = new google.maps.LatLng();
  destPosition = new google.maps.LatLng();
  timePack: any;
  pricePack: any;
  valPack: any;
  typePack: any;
  wieghtPack: any;
  sizePack: any;
  contactName : any;
  contactNum :any;
  private Marker ;
  private popup ;
  index : any;
  public date= new Date();


  constructor(private alertCtrl: AlertController,public adddelivery : TripProvider , public auth : UserProvider) {
    console.log('Hello SendpackageComponent Component');
    this.hide1=false;
    this.hide2=true;
    this.hide3=false;
    this.index=-1;
    this.steps();
    
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
addDelivery(){
  this.typePack="telephone";
  console.log(this.typePack);
  this.timePack="immeidat";
  console.log(this.timePack);
  this.valPack=10.1;
  console.log(this.valPack);
  console.log(this.date);
  this.adddelivery.addDelivery((this.srcPosition.lat()).toString(),
                                (this.srcPosition.lng()).toString(),
                                this.date,
                                this.auth.userData.data[0].idUser,
                                this.auth.userData.data[0].idUser,
                                this.date,
                                (this.destPosition.lat()).toString(),
                                (this.destPosition.lng()).toString(),
                                this.timePack,
                                this.pricePack,
                                this.typePack,
                                this.valPack,
                                this.wieghtPack,
                                this.sizePack)
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
    this.sourcePlace();
  break;
  case 1 :
    this.destinationPlace();
    break;

  case 2 :
    this.sizePackage();
    break;

  case 3 :
    this.wieghtPackage();
    break;

  case 4 :
    this.contactInfo();
    break;

  case 5 :
    this.priceTrip();
    break;

}
}


sourcePlace(){
  this.hidemarker2();
  this.srcPosition = this.markerLocation();
  this.Alert1();
}
destinationPlace(){
  this.hidemarker1();
  this.destPosition = this.markerLocation();
  this.Alert2();
}
sizePackage(){
  this.hidemarker2();
  this.hidemarker1();
  this.sizeAlert();
}
wieghtPackage(){
  this.hidemarker2();
  this.hidemarker1();
  this.wieghtAlert();
}
contactInfo(){
  this.hidemarker2();
  this.hidemarker1();
  this.contactAlert();
}
priceTrip(){
  this.hidemarker2();
  this.hidemarker1();
  this.priceAlert();
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
    console.log(markerlocation.lat());
    console.log(markerlocation.lng());
    return (markerlocation);
  }
  hideMarker(){
    if(this.Marker){
      this.Marker.setMap(null);
    }
  }
  hidemarker1(){  
    this.hide2=false;
    console.log(this.hide2)
  }
  hidemarker2(){  
    this.hide3=false;
    console.log(this.hide3)
  }
  Alert1() {
    let alert = this.alertCtrl.create({
      title: 'Choisir le depart de ton colis',
      subTitle: 'glisser le map pour choisir la postion',
      buttons: ['Ok']
    });
    alert.present();
  }
  Alert2() {
    let alert = this.alertCtrl.create({
      title: 'Choisir la destination de ton colis',
      subTitle: 'glisser le map pour choisir la postion',
      buttons: ['Ok']
    });
    alert.present();
  }
  sizeAlert() {
    let alert = this.alertCtrl.create({
      title: 'Taille de colis',
      message: 'a peut pret quelle est le categorie',
      inputs: [
        {
          label: 'taille1',
          type: 'radio',
          checked : true ,
          value : '1'
        },
        {
          label: 'taille2',
          type: 'radio',
          value : '2'
        },
        {
          label: 'taille3',
          type: 'radio',
          value : '3'
        },
        {
          label: 'taille4',
          type: 'radio',
          value : '4'
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
            this.sizePack = parseInt(data) ;
            console.log(this.sizePack);
            this.nextStep();
          }
        }
      ]
    });
    alert.present();
  }
  wieghtAlert() {
    let alert = this.alertCtrl.create({
      title: 'Poids de colis',
      message: 'a peut pret quelle est le categorie',
      inputs: [
        {
          label: 'poids1',
          type: 'radio',
          checked : true ,
          value : '1'
        },
        {
          label: 'poids2',
          type: 'radio',
          value : '2'
        },
        {
          label: 'poids3',
          type: 'radio',
          value : '3'
        },
        {
          label: 'poids4',
          type: 'radio',
          value : '4'
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
            this.wieghtPack = parseInt(data);
            console.log(this.wieghtPack);

            this.nextStep();
          }
        }
      ]
    });
    alert.present();
  }
  contactAlert() {
    let alert = this.alertCtrl.create({
      title: 'Contact',
      message: 'veuillez saisir les info de destinataire',
      inputs: [
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
            this.contactNum = data.Numero ;
            this.nextStep();
          }
        }
      ]
    });
    alert.present();
  }
  priceAlert() {
    let alert = this.alertCtrl.create({
      title: 'Prix du Livraison',
      message: '10.000 Dt',
  
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
          text: 'OK',
          handler: () => {
            console.log('ok clicked');
            this.nextStep();
            this.pricePack = 10 ;
            console.log(this.pricePack);
            this.addDelivery();
          }
        }
      ]
    });
    alert.present();
  }

  calculeDistance(){
          var service = new google.maps.DistanceMatrixService();
          service.getDistanceMatrix(
        {
          origins: [this.srcPosition],
          destinations: [this.destPosition],
          travelMode: 'DRIVING',
          avoidHighways: false,
          avoidTolls: false,
        }, callback);

      function callback(response, status) {
      console.log(response.rows[0].elements[0].distance.text);
      console.log(response.rows[0].elements[0].duration.text);
      return(response.rows[0].elements[0].distance.val)

      }
  }

  calculePrice(){
    
  }

  
}



