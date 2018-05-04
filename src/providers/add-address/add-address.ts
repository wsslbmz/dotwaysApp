import { Injectable } from '@angular/core';
import { Http, Headers ,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddAdressProvider {

	url: string = 'http://147.135.136.78:8052/adress/add'

	constructor(public http: Http) {

	}

	addadress (latpos,lngpos,updateday,createdby,updateby,createdday,labelAdr,contactAdr,mobileAdr,typeAdr,sharedtoAdr,userAdr){

    
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let adressdata = {
      geolocAdr:{
      lat:latpos,
      lang:lngpos  
      },
      updateday:updateday,
      createdby:createdby,
      updateby:updateby,
      createdday:createdday,
      contactAdr:contactAdr,
      labelAdr:labelAdr,
      mobileAdr:mobileAdr,
      typeAdr:typeAdr,
      sharedtoAdr:[sharedtoAdr],
      userAdr:userAdr
        }
	
		 this.http.post(this.url, adressdata ,options).subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);// Error getting the data

    });

  }
}



