import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './resignter.page.html',
  styleUrls: ['./resignter.page.scss'],
})
export class ResignterPage implements OnInit {

  constructor(
    private NavCtrl : NavController,
    private alertCtrl : AlertController,
    private accountService : AccountService
  ) {}

  ngOnInit() {
  }

  async comfirmFail() {
    let alert = await this.alertCtrl.create({
      header : 'Fail !',
      message : 'Mat khau khong khop',
      buttons : ['Ok']
    });
    await alert.present();
  }

  async datontai() {
    let alert = await this.alertCtrl.create({
      header : 'Fail !',
      message : 'Tài khoản đã tồn tại',
      buttons : ['Ok']
    });
    await alert.present();
  }

  async emaildatontai() {
    let alert = await this.alertCtrl.create({
      header : 'Fail !',
      message : 'email đã được sử dụng',
      buttons : ['Ok']
    });
    await alert.present();
  }

  async registerSuccess() {
    let alert = await this.alertCtrl.create({
      header : 'Success !!!',
      message : 'Tạo tài khoản thành công !',
      buttons : ['Ok']
    });
    await alert.present();
  }

  async thieuthongtin() {
    let alert = await this.alertCtrl.create({
      header : 'Fail !',
      message : 'Bạn cần nhập đủ các thông tin',
      buttons : ['Ok']
    });
    await alert.present();
  }

  register(username,password,confirm,email) {
    if ( password!=confirm ) {
      this.comfirmFail();
    }
    else if (username=="" || password=="" || email=="") {
      this.thieuthongtin();
    }
    else {
      this.accountService.register(username,email,password).subscribe( (data:any) => {
        console.log(data);
        if ( data==0) {
          this.datontai();
        }
        else if ( data==1) {
          this.emaildatontai();
        }
        else {
          this.registerSuccess();
          // console.log(data);
          this.goback();
        }
      }, err => {
        console.log("error");
      })
    }
  }

  goback(){
    this.NavCtrl.navigateBack(['home']);
  }

}
