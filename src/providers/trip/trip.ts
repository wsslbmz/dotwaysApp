import { Injectable } from '@angular/core';
import { Http, Headers ,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TripProvider {

	url: string = 'http://147.135.136.78:8052/delivery/add'
  public tripData : any ;
	constructor(public http: Http) {
	}

	addDelivery (latsrc,lngsrc,updateday,createdby,updateby,createdday,latdes,lngdes,timingDelivery,costDelivery,typePackage,valPackage,weightPackage,sizePackage){

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let deliverydata = {
      sourceDelivery : {
        lat:latsrc,
        lang:lngsrc
        },
      updateday:updateday,
      createdby:createdby,
      updateby:updateby,
      createdday:createdday,
      destDelivery: {
        lat:latdes,
        lang:lngdes
        },
      timingDelivery:timingDelivery,
      costDelivery:costDelivery,
      packageDelivery:{
        typePackage:typePackage,
        valPackage:valPackage,
        weightPackage:weightPackage,
        sizePackage:sizePackage}
    }
	
		 this.http.post(this.url, deliverydata ,options).subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);// Error getting the data

    });

  }
}
