import { Storage } from '@ionic/storage';
import { AccountService } from './../services/account.service';
import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  constructor(
    private alertCtrl : AlertController,
    private NavCtrl : NavController,
    private accService : AccountService,
    private storage : Storage,
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.NavCtrl.navigateBack(['main']);
  }
  async changepasssuccess() {
    let alert = await this.alertCtrl.create({
      header : 'change pass success',
      buttons: [
        {
          text : 'Ok',
          handler: () => {
            this.NavCtrl.navigateBack(['home']);
          }
        }
      ]
    });
    await alert.present();
  }
  async changepassfail() {
    let alert = await this.alertCtrl.create({
      header : 'change pass fail',
      buttons: ['OK']
    });
    await alert.present();
  }
  async changePass() {
    let alert = await this.alertCtrl.create({
      header : 'Change password',
      inputs: [
        {
          name : 'oldPass',
          placeholder : 'Old Password',
          type : "password",
        },
        {
          name : 'newPass',
          placeholder : 'New Password',
          type : "password",
        }
      ],
      buttons: [
        {
          text : 'Cancel',
          role : 'cancel',
          handler: () => {
            console.log("cancel change pass")
          }
        },
        {
          text : 'Ok',
          handler: async (input) => {
            const accId = await this.storage.get('accountId');
            this.accService.changePass(input.newPass,accId).subscribe ( (data) => {
              console.log("change password success");
              this.changepasssuccess();
            }, error => {
              console.log("change password fail : ", error);
              this.changepassfail();
            });
          }
        }
      ]
    });
    await alert.present();
  }
  async Logout() {
    let alert = await this.alertCtrl.create({
      header : 'Confirm!',
      message : 'Really Log out',
      buttons: [
        {
          text : 'Cancel',
          role : 'cancel',
          handler: () => {
            console.log("cancel logout")
          }
        },
        {
          text : 'Ok',
          handler: () => {
            this.NavCtrl.navigateBack(['home']);
          }
        }
      ]
    });
    await alert.present();
  }

  goProduct(){
    this.NavCtrl.navigateForward(['product']);
  }

  goCart() {
    this.NavCtrl.navigateForward(['cart']);
  }
  
  goFavorite() {
    this.NavCtrl.navigateForward(['favorite']);
  }
}
