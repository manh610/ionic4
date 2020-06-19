import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private httpClient : HttpClient,
  ) { }

  login(username:string,password:string) {
    let data:any = {
      username : username,
      password : password
    }
    return this.httpClient.post('http://localhost:3000/account/login',data);
  }

  register(username:string,email:string,password:string){
    let data:any = {  
      username : username,
      password : password,
      email : email
    }
    return this.httpClient.post('http://localhost:3000/account/register',data);
  }

  changePass(newPass:string,accID:number) {
    let data : any = {
      password : newPass
    }
    return this.httpClient.put('http://localhost:3000/account/'+accID,data);
  }
}
