// import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NavController,AlertController } from '@ionic/angular';
import { AccountService } from '../services/account.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private NavCtrl : NavController,
    private accountService : AccountService,
    private alertCtrl : AlertController,
    private storage : Storage,
  ) {}
  
  async loginfail() {
    let alert = this.alertCtrl.create({
      header : "Fail !",
      message : "Tài khoản hoặc mật khẩu không đúng !",
      buttons : ['OK']
    });
    (await alert).present();
  }

  login(username, password) {
    this.accountService.login(username,password).subscribe( (data:Account) => {
      console.log(data);
      if ( data!=null ) {
       console.log("login success");
       this.storage.set('accountId',data.id);
       this.storage.get('accountId').then((val)=>{
         console.log("storage : ",val)
       })
       this.NavCtrl.navigateForward(['main']);
      }
      else {
        this.loginfail();
        console.log("login fail");
      }
    }, err => {
      console.log("error");
    } );
  }

  register() :  void {
    this.NavCtrl.navigateForward(['resignter']);
  }
}
