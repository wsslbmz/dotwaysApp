import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { NavController, AlertController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/toPromise';
import * as SlidingMarker  from 'marker-animate-unobtrusive';
import { UserProvider } from '../../providers/user/user';




declare var google : any;

@Component({
  selector: 'realtimenav',
  templateUrl: 'realtimenav.html'
})
export class RealtimenavComponent implements OnInit{
  
  @Input() mapstop :boolean;
  @Input() map ;

  private url : string ="http://147.135.136.78:8052/driver/one/";
  public liv : any ;
  public id :string=this.auth.userData.data[0].idUser;
  public jsonObj ;
  private Marker :any ;
  private popup ;
  location = new google.maps.LatLng(50.712784,-4.005942)
  location2 = new google.maps.LatLng(50.512184,-4.5059420000000046)
  public locationd ;
  // private popup ;
  adrPosition = new google.maps.LatLng();
  public myObservable ;
  public subcriber: Subscription;
  public pickupCarMarker ;
  public polylinePath;
  public obs ;
  public obsTime = 5000;
  constructor(public navCtrl: NavController ,public auth:UserProvider,public http:Http, public alertCtrl: AlertController) {
    console.log('Hello RealtimenavComponent Component');
    this.obs = true;
    
  }

  ngOnInit(): void {
    if (this.obs == true){
      let timer = Observable.timer(3000,this.obsTime);
      this.subcriber = timer.subscribe(() => {
      this.removeCar();
      //this.removeDirections();
      this.getDriver("5ae342cbe497062f61b0475c");//idDriver
      this.showMarkerUser(this.location); //source loction or user loCATION 
      this.showMarkerCar(this.locationd); //lastposDriver
      this.showDirections(this.location,this.locationd); //source loction or user loCATION 
    });
    }
  }  
 
  public unsubscribeObs() {
    this.obs = false;
    //this.obsTime=50000;
    this.subcriber.unsubscribe();
    console.log("yyyyyyyyyyyyyyyyyyy")
   }

  
  getDriver(id) //idDriver
  {
    let datad:Observable<any>
    datad =  this.http.get(this.url+id);
      datad.subscribe(
         res => { this.liv = res['_body'];
         console.log("resssssssssss",res)
         let jo = JSON.parse(this.liv);
         let obj = Array.of(jo.data);
         this.jsonObj = obj[0];
         console.log("resssssss",parseFloat(this.jsonObj.lastposDriver.lng));
         this.locationd = new google.maps.LatLng(parseFloat(this.jsonObj.lastposDriver.lat),parseFloat(this.jsonObj.lastposDriver.lng));
       });  
       //this.showMarker();

  }
  
  // ngOnChanges(changes){
  //   console.log(this.mapstop);
  //   if(!this.mapstop){
  //     this.hideMarker();
  //   }
  //   else{
  //     this.showMarker();
  //     this.unsubscribeObs();
  //       }
  // }
  showMarkerUser(loc){

    this.Marker =  new google.maps.Marker({
      map : this.map,
      animation : google.maps.Animation.BOUNCE,
      position : loc, //user location or source package
      icon : 'assets/imgs/dest_pin.png'
      
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


  //gggggggggggggg
  showMarkerCar(loc){
    this.pickupCarMarker = new SlidingMarker({
      map:this.map,
      position : loc, //lastposDriver
      icon : 'assets/imgs/taxi.png'
    })

    this.pickupCarMarker.setDuration(1000);
    this.pickupCarMarker.setEasing('linear');
  }

  removeCar(){

    if(this.pickupCarMarker) {
      this.pickupCarMarker.setMap(null);
      this.pickupCarMarker = null;
    }
  }

  // showDirections(loc){
  //   this.polylinePath = new google.maps.Polyline({
  //     path: loc,  // user locAtion
  //     strokeColor: '#1E7Fff',
  //     strokeWeight : 7
  //   })

  //   this.polylinePath.setMap(this.map);
  // }
  
  showDirections(loc1 , loc2){
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
      directionsService.route({
        origin: loc1,
        destination: loc2,
        travelMode: 'DRIVING'
      }, function(response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
      directionsDisplay.setMap(this.map);
      
  }

}
