import { Component, OnInit, Input , Output ,EventEmitter} from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular'
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable'
import { DestinationAddresComponent } from '../destination-addres/destination-addres';


declare var google : any;
@Component({
  selector: 'maps',
  templateUrl: 'maps.html'

})
export class MapsComponent implements OnInit{

  @Input() dispalycomponent ;
  public map ;
  public currentLocation;
  public mapstop : boolean;
  public hide :boolean;

  constructor(public geolocation : Geolocation,
              public loadingCtrl : LoadingController) {
    console.log('Hello MapsComponent Component');
    console.log(this.dispalycomponent);

    this.hide=true;

  }

  
  ngOnInit(){
    this.map =this.createMap();
    this.addMapEventListeners();

    this.getCurrentLocation().subscribe(location => {
      this.map.setCenter(location);
    })
    

  }
  

  addMapEventListeners(){
    google.maps.event.addListener(this.map,'dragstart', () => {
      this.mapstop = false;
    })
    google.maps.event.addListener(this.map, 'dblclick', () => {
      this.mapstop = false;
    })
    google.maps.event.addListener(this.map, 'zoom_changed', () => {
      this.mapstop = false;
    })
    google.maps.event.addListener(this.map, 'idle', () => {
      this.mapstop = true;
    })
    
  }

  getCurrentLocation() {

    let loading = this.loadingCtrl.create({
      content:'Locating...'
    });
    loading.present();

    let options = {timeout : 4000 , enableHighAccuracy:true};
    let locationObs = new Observable(observable => {
      this.geolocation.getCurrentPosition(options)
      .then(resp => {
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;
        console.log('lat '+ lat +' == '+ 'long '+lng );
        let location = new google.maps.LatLng(lat, lng);
        console.log('current location '+location)
        observable.next(location);
        loading.dismiss();
      },
      (err) => {
        console.log('Geolocation err: '+ err);
        loading.dismiss();
      
      })
    })
    return locationObs;
  }


  createMap(location = new google.maps.LatLng(40.712784,-74.005942)){
    console.log('init location ' + location)
    let mapOptions = {
      center: location,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      disableDefaultUI:true
    }
    let mapEl = document.getElementById("map");
    let map = new google.maps.Map(mapEl,mapOptions);

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });
    var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: '/',
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
    return map;
  }
  centerLocation(location){
    if(location){
      this.map.setCenter(location);
    }
    else{
      this.getCurrentLocation().subscribe(currentLocation => {
        this.map.setCenter(currentLocation);
      })
    }
  }


  hideelem(){  
    this.hide=false;
    console.log(this.hide)
  }

  
}
