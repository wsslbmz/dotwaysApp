  import { Injectable } from '@angular/core';
  import { Http, Headers ,RequestOptions} from '@angular/http';
  import 'rxjs/add/operator/toPromise';
  import 'rxjs/add/operator/map';
  
  @Injectable()
  export class UserProvider {
  public userData :any;
    url: string = 'http://147.135.136.78:8052/user/'
  
    constructor(public http: Http) {
    }
  
    loginUser(login, password){
  
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('cache-control','no-cache')
      return this.http.post(this.url + 'signin?login='+login+'&password='+password, {headers: headers});
    }
  
    addUser (login,password,nameUser,surnameUser,mobileUser,emailUser,updateday,createdby,updateby,createdday,nbrateUser,rateUser){
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
    
       this.http.post(this.url+"add", userdata ,options).subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);// Error getting the data
  
      });
  
    }
    updateUser (idUser,login,nameUser,surnameUser,emailUser,updateday,updateby)
      {
          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json' );
          let options = new RequestOptions({ headers: headers });
      
          let userdata = {
            nameUser: nameUser,
            login:login,
            surnameUser:surnameUser,
            emailUser:emailUser,
            updateday:updateday,
            updateby:updateby
          }
          this.http.put(this.url+"update/"+idUser, userdata ,options).subscribe(data => {
            console.log(data['_body']);
          }, error => {
            console.log(error);// Error getting the data
          });
  
      }
      updateUserPassword(idUser,password){
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });
    
        let userdata = {
          password: password,
        }
        this.http.put(this.url+"update/"+idUser, userdata ,options).subscribe(data => {
          console.log(data['_body']);
        }, error => {
          console.log(error);// Error getting the data
        });
      }
  
  }