import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthProvider {
public userData :any;
	url: string = 'http://147.135.136.78:8052/user/'

	constructor(public http: Http) {

	}

	login(login, password){

		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('cache-control','no-cache')

		return this.http.post(this.url + 'signin?login='+login+'&password='+password, {headers: headers})
		;
		/*JSON.stringify(credentials), {headers: headers});*/
  }


}