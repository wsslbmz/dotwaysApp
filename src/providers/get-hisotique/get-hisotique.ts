import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class GetHisotiqueProvider {
public liv ;
    private url : string ="http://147.135.136.78:8052/delivery/all"
    constructor(private http: Http) {
      console.log('Hello MsgreqProvider Provider');
    }
  
    getMsg()
     {
      return new Promise(resolve => {
        this.http.get(this.url)
          .subscribe(data => {
            this.liv = JSON.parse(data['_body']).results;
            resolve(this.liv);
          });
      });
  
  }
}