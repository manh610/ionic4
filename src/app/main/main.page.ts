import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private navCtrl : NavController,
    private router : Router
  ) { }

  ngOnInit() {
  }

  goProducts() {
    this.navCtrl.navigateForward(['product']);
  }

  gosetting(accountId : number) {
    let navigationextras: NavigationExtras = {
      state: {
        accountId: accountId
      }
    }
    this.router.navigate(['/setting'], navigationextras);
  }

  goFavorite() {
    this.navCtrl.navigateForward(['favorite']);
  }
  goCart() {
    this.navCtrl.navigateForward(['cart']);
  }
}
