import { Injectable } from '@angular/core';
import { Http, Headers ,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdduserProvider {

	url: string = 'http://147.135.136.78:8052/user/add'

	constructor(public http: Http) {

	}

	adduser (login,password,nameUser,surnameUser,mobileUser,emailUser,updateday,createdby,updateby,createdday,nbrateUser,rateUser){

    
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
 
    let userdata = {
      nameUser: nameUser,
      login:login,
      password:password,
      mobileUser:mobileUser,
      surnameUser:surnameUser,
      emailUser:emailUser
    }
	
		 this.http.post(this.url, userdata ,options).subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);// Error getting the data

    });

  }
}



